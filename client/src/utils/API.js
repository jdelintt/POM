export default {
    login: user => {
        return fetch("/api/login", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.status !== 401) {
                return res.json().then(data => data)
            }
            else {
                return { isAuthenticated: false, user: { username: "", role: "" } }
            }
        })

    },
    signup: user => {
        console.log(user)
        return fetch("/api/signup", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res)
            res.json()
        })
            .then(data => {
                console.log(data)
            })
    },
    logout: () => {
        return fetch("/api/logout")
            .then(res => res.json())
            .then(data => data)
    },
    userUpdate: (user) => {
        return fetch("/api/ADR/files", {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            res.json()
        })
    },
    emailSubmit: (fileObj) => {
        return fetch("/api/email/send", {
            method: "POST",
            body: JSON.stringify(fileObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            res.json()
        })
    },
    getUser: (user) => {
        return fetch("/api/user/" + user)
            .then(res => res.json())
            .then(data => data)
    },
    postSign: (sign) => {
        return fetch("/api/sign/trail", {
            method: "POST",
            body: JSON.stringify(sign),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => data)
    },
    isAuthenticated: () => {
        return fetch("/api/stayAuthenticated")
            .then(res => {
                if (res.status !== 401) {
                    return res.json().then(data => data)
                }
                else {
                    return { isAuthenticated: false, user: { username: "", role: "" } }
                }
            })
    }
}