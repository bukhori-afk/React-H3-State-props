import React, {Component} from 'react';

class Kursus extends Component{
    constructor(props) {
        super(props);
        this.state = 
        {
            paket: "kursus programming",
            materi: "React js",
            desc: "belajar react js",
            Harga: 200000
        };
    }
    render(){
        return(
            <div>
                <h1>Nama paket      : {this.state.paket}</h1><br/>
                <h1>Jenis Materi    : {this.state.materi}</h1><br/>
                <h1>Deskripsi Paket : {this.state.desc}</h1><br/>
                <h1>Nama Paket      : {this.state.Harga}</h1><br/>      
            </div>
        );
    }
}
export default Kursus;