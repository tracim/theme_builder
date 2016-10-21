document.addEventListener('DOMContentLoaded', function() {

    const initColor = ['#555555', '#F5F5F5', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f']

    init()

    function init() {
        setInitialColor()
        updateColor()

        document.getElementById('updateColor').addEventListener('click', updateColor)
        document.getElementById('resetColor').addEventListener('click', setInitialColor)
        document.getElementById('buildColor').addEventListener('click', buildColor)

        let i = 0
        for (let input of document.getElementsByClassName('jscolor')) {
            input.addEventListener('onFineChange', (color) => input.jscolor.fromString(color))
        }

        ;[].forEach.call(document.getElementsByClassName('form__input'), function (elem) {
            elem.addEventListener('change', () => updateColor())
        })
    }

    function setInitialColor() {
        let i = 0
        for (let input of document.getElementsByClassName('form__input')) {
            //input.setAttribute('value', initColor[i]) // not working with jscolor
            input.jscolor.fromString(initColor[i])
            i++
        }
    }

    function updateColor() {
        // semantic
        // document.getElementsByClassName('tracim__header')[0].style.backgroundColor = document.getElementById('brand-primary').value
        // document.getElementsByClassName('tracim__sidebar-left')[0].style.backgroundColor = document.getElementById('brand-primary').value
        // document.getElementsByClassName('tracim__sidebar-right')[0].style.backgroundColor = document.getElementById('brand-secondary').value
        // document.getElementsByClassName('tracim__content__header')[0].style.backgroundColor = document.getElementById('brand-secondary').value

        // functionnal
        ;[
            ['tracim__header', 'brand-primary', ],
            ['tracim__sidebar-left', 'brand-primary'],
            ['tracim__sidebar-right', 'brand-secondary'],
            ['tracim__content__header', 'brand-secondary'],
        ].forEach(([websiteElement, idColor]) => document.getElementsByClassName(websiteElement)[0].style.backgroundColor = document.getElementById(idColor).value)

        // // functionnal (noob mode)
        // ;[
        //     ['btn-primary', 'brand-primary'],
        //     ['btn-success', 'brand-success'],
        //     ['btn-info', 'brand-info'],
        //     ['btn-warning', 'brand-warning'],
        //     ['btn-danger', 'brand-danger']
        // ].forEach(function(elem) {
        //     document.getElementsByClassName(elem[0])[0].style.backgroundColor = document.getElementById(elem[1]).value
        //     document.getElementsByClassName(elem[0])[0].style.borderColor = document.getElementById(elem[1]).value
        // })

        // functionnal (extrem mode)
        ;[
            ['btn-primary', 'brand-primary'],
            ['btn-success', 'brand-success'],
            ['btn-info', 'brand-info'],
            ['btn-warning', 'brand-warning'],
            ['btn-danger', 'brand-danger']
        ].forEach(
            ([btnName, idColor]) => (
                ({style}, colorValue) => Object.assign(style, {
                    backgroundColor: colorValue,
                    borderColor: colorValue
                })
            )(document.getElementsByClassName(btnName)[0], document.getElementById(idColor).value)
        )
    }

    function buildColor() {
        // http POST http://tracim-theme.dev.algoo.fr/api/generate-css variables='{"brand-primary": "#123456 "}' > bootstrap-theme.css

        let param = {}

        ;[].forEach.call(document.getElementsByClassName('form__input'), function (elem) {
            Object.assign(param, { [elem.getAttribute('id')] : elem.jscolor.toHEXString() })
        })

        // const httpRequest = new XMLHttpRequest()
        // httpRequest.open('POST', 'http://tracim-theme.dev.algoo.fr/api/generate-css')
        // httpRequest.setRequestHeader('Content-Type', 'application/json')
        // httpRequest.send(JSON.stringify(param))
        // httpRequest.onreadystatechange = function (data) {
        //     console.log(data)
        // }
        param = '{"brand-primary": "#123456"}'

        $.ajax({
            url: 'http://tracim-theme.dev.algoo.fr/api/generate-css',
            dataType: 'json',
            method: 'POST',
            data: {
                variables: param
            }
        }).done(function (data) {
            console.log(data)
        })
    }
})
