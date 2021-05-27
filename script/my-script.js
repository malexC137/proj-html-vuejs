new Vue({
    el: "#app",
    data: {
        headerLinks: [{
            text: "Home",
            link: "#"
        }, {
            text: "Shop",
            link: "#",
            childs: [{
                text: "Bakery",
                link: "#"
            }, {
                text: "Pastry",
                link: "#"
            },{
                text: "Book an event",
                link: "#"
            }]
        }, {
            text: "About",
            link: "#"
        }, {
            text: "Gallery",
            link: "#"
        }, {
            text: "Locations",
            link: "#",
            childs: [{
                text: "New York",
                link: "#"
            }, {
                text: "London",
                link: "#"
            }]
        }, {
            text: "Journal",
            link: "#"
        }, {
            text: "Contact",
            link: "#",
            childs: [{
                text: "Tel. 1234567890",
                link: "#"
            }, {
                text: "e-mail info@avada.com",
                link: "#"
            }]
        }, {
            text: "Orders",
            link: "#"
        }, {
            text: "My Account",
            link: "#"
        }],
    },
    computed: {
        fullFooterLinks() {
            //Dichiaro una costante che sarà uguale alla mia array originale
            const newFooterList = [...this.headerLinks]
            //Con il metodo Splice estraggo dall'array solo le voci da visualizzare nella lista del footer
            return newFooterList.splice(1, 7)
        },
        fullHeaderLinks() {
            //Dichiaro una costante che sarà una copia della mia array originale
            const newHeaderList = [...this.headerLinks]
            //Con il metodo Splice, salvo in una costante le voci che la lista nell'header non dovrà contenere 
            const removedElements = newHeaderList.splice(7, 1)
            //L'array copiata adesso conterrà solamente le voci che devono essere stampate nell'header
            return newHeaderList
        }
    }
})