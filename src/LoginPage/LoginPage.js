import React from 'react';
//import PropTypes from 'prop-types';
import styles from '../styles/LoginPage.module.css';

class LoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nickName: "",
      password:"",

    }
  }

sendLogin = (event) => {
  let data = {
    nickName : this.state.nickName,
    password: this.state.password
  }
  console.log("data", data);
}

  render(){
    return (
      <div className={styles.container}>
          <div className={styles.card}>
              <div className={styles.cardBody}>
                  <form onSubmit={this.sendLogin}>
                      <div className={styles.formGroup}>
                          <label htmlFor="nickName">Usuário</label>
                          <input 
                              type="text" 
                              className={styles.formControl}
                              value= {this.state.nickName}
                              onChange={e =>this.setState({nickName : e.target.value})}
                              id="nickName" 
                              placeholder="Usuário" />
                      </div>
                      <div className={styles.formGroup}>
                          <label htmlFor="password">Senha</label>
                          <input 
                              type="password" 
                              className={styles.formControl}
                              value={this.state.password} 
                              onChange={e =>this.setState({password : e.target.value})}
                              id="password" 
                              placeholder="Senha"/>
                      </div>
                      <button type="submit" className={styles.btnPrimary}>Entrar</button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

// const LoginPage = () => (
//   <div className={styles.LoginPage} data-testid="LoginPage">
//     LoginPage Component
//   </div>
// );

// LoginPage.propTypes = {};

// LoginPage.defaultProps = {};

export default LoginPage;
