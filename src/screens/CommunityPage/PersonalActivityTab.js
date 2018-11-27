import React from "react";
import PropTypes from "prop-types";
import { Palette, TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";

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
  render() {
    return (
      <TabContent>
        <StatisticLabel
          head="¡Has realizado"
          number={this.state.total_comentarios}
          foot="comentarios en total!"
        />
        <StatisticLabel
          head="¡Has ganado"
          number={this.state.seguidores_mensual}
          foot="seguidores este mes!"
        />
        <StatisticLabel
          head="¡Has seguido"
          number={this.state.seguidos_mensual}
          foot="usuarios este mes!"
        />
        <StatisticLabel
          head="¡Has reaccionado a"
          number={this.state.total_reacciones}
          foot="fragmentos en total!"
        />
        <StatisticLabel
          head="¡Has recibido"
          number={this.state.votos_positivos_comentario}
          foot="votos positivos!"
        />
      </TabContent>
    );
  }
}

PersonalActivityTab.propTypes = {};
