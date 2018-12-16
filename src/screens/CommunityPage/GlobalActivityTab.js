import React from "react";

import { TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";
import axios from "axios";

export default class GlobalActivityTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_usuarios_logueados: 42,
      total_comentarios_mensual: 38,
      total_fragmentos_mensual: 50,
      total_likes_fragmentos: 29,
      total_usuarios_registrados: 41
    };
  }


  componentDidMount() {
    console.log("solicitando al back")
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/user/stat/user_activity",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(response => {
      console.log("comentarios mensual")
      this.setState({
        total_comentarios_mensual: response.data
      })
    })
  }


  render() {
    const token = localStorage.getItem("jwtToken");
    console.log(token)
    return (
      <TabContent>
        <StatisticLabel
          head="¡Han ingresado"
          number={this.state.total_usuarios_logueados}
          foot="usuarios este mes!"
          type="global"
        />
        <StatisticLabel
          head="¡Se han realizado"
          number={this.state.total_comentarios_mensual}
          foot="comentarios este mes!"
          type="global"
        />
        <StatisticLabel
          head="¡Se han creado"
          number={this.state.total_fragmentos_mensual}
          foot="fragmentos este mes!"
          type="global"
        />
        <StatisticLabel
          head="¡En total hay"
          number={this.state.total_likes_fragmentos}
          foot="reacciones positivas!"
          type="global"
        />
        <StatisticLabel
          head="¡Se han registrado"
          number={this.state.total_usuarios_registrados}
          foot="usuarios este mes!"
          type="global"
        />
      </TabContent>
    );
  }
}

