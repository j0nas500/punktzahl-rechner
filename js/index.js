new Vue({
    el: "#app",
    data: {
        umrechnungKlausurNoten : [95,90,85,80,75,70,65,60,55,50,45,40,33,27,20,0],
        umrechnungSonstNoten : [98.67,97.33,96,90.67,85.33,80,73.33,66.67,60,55.33,46.67,40,33.33,26.67,20,0],
        punktzahl: ""
    },

    methods: {
        rechnen(umrechnung, punktzahl){
            let temp = []
            for (const i of umrechnung){
                temp.push(Math.round((punktzahl*i/100)*100)/100)
            }
            return temp
        }
    },

    computed: {
        klausurNotenRechner(){
            if (this.punktzahl > 0 && typeof parseFloat(this.punktzahl) == "number"){
                return this.rechnen(this.umrechnungKlausurNoten, parseFloat(this.punktzahl))
            } else {
                return " ,".repeat(15).split(",")
            }
        },
        sonstNotenRechner(){
            if (this.punktzahl > 0 && typeof parseInt(this.punktzahl) == "number"){
            return this.rechnen(this.umrechnungSonstNoten, parseFloat(this.punktzahl))
            } else {
                return " ,".repeat(15).split(",")
            }
        }
    }


})