import React from "react";
import PropTypes from "prop-types";
import { TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";
//  Nada mas es borrar el state y cambiar el contenido a que lea de props
export default class GlobalActivityTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_usuarios_logueados: 25000,
      total_comentarios_mensual: 50000,
      total_fragmentos_mensual: 200,
      total_likes_fragmentos: 50000,
      total_usuarios_registrados: 1000
    };
  }
  render() {
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

GlobalActivityTab.propTypes = {
  total_usuarios_logueados: PropTypes.number.isRequired,
  total_comentarios_mensual: PropTypes.number.isRequired,
  total_fragmentos_mensual: PropTypes.number.isRequired,
  total_likes_fragmentos: PropTypes.number.isRequired,
  total_usuarios_registrados: PropTypes.number.isRequired
};
