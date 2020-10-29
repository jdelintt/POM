import React, { useState, useRef, useContext, useEffect } from 'react'
import SignaturePad from "react-signature-canvas"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import API from "./../utils/API"
import { AuthContext } from "./../context/AuthContext";



function ESign(props) {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user.username) {
            API.getUser(user.username)
                .then(res => setUserData(res))
        }

    }, [user])


    const [signature, setSignature] = useState({
        trimmedURI: "",
        timesStarted: [],
        timesEnded: [],
        username: ""

    })

    const [userData, setUserData] = useState({})

    useEffect(() => {

        if (userData.firstName) {
            API.userUpdate(userData)
            .then(res => console.log(res))
        }

    }, [userData])


    let sigPad = useRef(null);

    const styles = {
        pad: {
            width: "500px",
            justifycontent: "center",
            minheight: "500px",
            border: "1px solid black"

        }
    }

    const signatureEnd = () => {
        API.postSign(signature)
            .then(res => {
                console.log(res)
            })
        setUserData({ ...userData, signatures: [...userData.signatures, { title: signature.timesStarted[0].title, signature: signature.trimmedURI }] })



    }

    const getInfoTimeStarted = (whoSigned) => {
        setSignature({ ...signature, timesStarted: [...signature.timesStarted, { title: whoSigned, time: Date.now() }], username: user.username })


    }


    return (
        <div>
            <Popup modal trigger={<button>{props.buttonText}</button>} position="center">
                <SignaturePad
                    onBegin={() => getInfoTimeStarted(props.whosSigning)}
                    ref={(ref) => {
                        sigPad = ref
                    }}
                    onEnd={() => setSignature({ ...signature, trimmedURI: sigPad.getTrimmedCanvas().toDataURL("image/png"), timesEnded: [...signature.timesEnded, { title: props.whosSigning, time: Date.now() }] })}
                    penColor="black"
                    canvasProps={styles.pad}
                />

                <button
                    onClick={() => signatureEnd(props.whosSigning)}
                >
                    Sign
                </button>
            </Popup>
            <img src={signature.trimmedURI} />

        </div>
    )

}


export default ESign
