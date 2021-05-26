new Vue({
    el: "#app",
    data: {
        headerLinks: [{
            text: "Home",
            link: "#"
        },{
            text: "Shop",
            link: "#"
        },{
            text: "About",
            link: "#"
        },{
            text: "Gallery",
            link: "#"
        },{
            text: "Locations",
            link: "#"
        },{
            text: "Journal",
            link: "#"
        },{
            text: "Contact",
            link: "#"
        },{
            text: "Orders",
            link: "#"
        },{
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