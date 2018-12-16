import React from "react";

import { TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";
import axios from "axios";
export default class PersonalActivityTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_comentarios: 100,
      seguidores_mensual: 50,
      seguidos_mensual: 20,
      total_reacciones: 500,
      votos_positivos_comentario: 1000
    };
  }

  componentDidMount() {
    console.log("personal comments")
    axios({
      method: "POST",
      url:
        "https://luckyread-backend.herokuapp.com/api/user/stat/user _activityDate&ID",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      },
      data: {
        "Date": "2018-01-01",
        "id": "1"
      }

    }).then(response => {
      console.log("personal comentarios mensual ")
      console.log(response)
      this.setState({
        total_comentarios: response.data
      })
    })
  }




  render() {
    return (
      <TabContent>
        <StatisticLabel
          head="¡Has realizado"
          number={this.state.total_comentarios}
          foot="comentarios en total!"
          type="local"
        />
        <StatisticLabel
          head="¡Has ganado"
          number={this.state.seguidores_mensual}
          foot="seguidores este mes!"
          type="personal"
        />
        <StatisticLabel
          head="¡Has seguido a"
          number={this.state.seguidos_mensual}
          foot="usuarios este mes!"
          type="personal"
        />
        <StatisticLabel
          head="¡Has reaccionado a"
          number={this.state.total_reacciones}
          foot="fragmentos en total!"
          type="personal"
        />
        <StatisticLabel
          head="¡Has recibido"
          number={this.state.votos_positivos_comentario}
          foot="votos positivos!"
          type="personal"
        />
      </TabContent>
    );
  }
}

PersonalActivityTab.propTypes = {

};
