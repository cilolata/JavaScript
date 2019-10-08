(function () {
    const CEP = document.querySelector("#CEP")
    const rua = document.querySelector("#rua")
    const complemento = document.querySelector("#complemento")
    const cidade = document.querySelector("#cidade")
    const bairro = document.querySelector("#bairro")
    const UF = document.querySelector("#UF")

    CEP.oninput = () => {
        if (CEP.value === "" || CEP.value.length < 9) {
            rua.value = ""
            bairro.value = ""
            UF.value = ""
        }

        fetch(`https://viacep.com.br/ws/${CEP.value}/json/`)
            .then(response => response.json())
            .then(data => {
                rua.value = data.logradouro
                complemento.value = data.complemento
                bairro.value = data.bairro
                cidade.value = data.localidade
                UF.value = data.uf
            })

        CEP.value = CEP.value.replace(/D/g, "").replace(/^(\d{5})(\d)/, "$1-$2")
    }
})()
