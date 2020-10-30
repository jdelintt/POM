import React, { useState, useRef, useContext, useEffect } from 'react'
import SignaturePad from "react-signature-canvas"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import API from "./../utils/API"
import { AuthContext } from "./../context/AuthContext";



function ESign(props) {

    const { user, setUser } = useContext(AuthContext);



    const [signature, setSignature] = useState({
        trimmedURI: "",
        timesStarted: [],
        timesEnded: [],
        username: ""

    })

    useEffect(() => {
        if (user) {
            if (user.firstName) {
                API.userUpdate(user)
                    .then(res => console.log(res))
            }
        }



    }, [user])


    let sigPad = useRef(null);

    const styles = {
        pad: {
            width: "500px",
            justifycontent: "center",
            minheight: "200px",
            border: "1px solid black"

        }
    }

    const signatureEnd = () => {
        API.postSign(signature)
            .then(res => {
                console.log(res)
            })
        setUser({ ...user, signatures: [...user.signatures, { title: signature.timesStarted[0].title, signature: signature.trimmedURI }] })



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
