import * as React from 'react';
import { Page } from 'client/src/components/page';
import { Helmet } from 'react-helmet';
import { styled } from 'client/src/styles';
import { Placeholder } from './placeholder';

import {api} from '../../api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.foregroundLight};
`;

interface MyState {
  loading: boolean;
}

export class Login extends React.Component<{}, MyState> {
  private constructor(props: any) {
    super(props);
    this.state = { loading: false };
  }

  private doLogin = () => {
    // const uri = 'railsapi';
    const uri = api+'/api';
    // const uri = 'http://10.5.117.235/api';
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (userName !== '' && password !== '') {
      this.setState({ loading: true });
      fetch(uri + '/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Username: userName,
          Password: password,
        }),
      })
        .then(response =>
          response.json().then(data => ({
            data: data,
            status: response.status,
          })),
        )
        .then(res => {
          if (res.status === 401) {
            alert('Username or Password is not correct');
            this.setState({ loading: false });
          } else {
            if (res.data.AccountInfo.token) {
              localStorage.setItem('login', 'true');
              localStorage.setItem('token', res.data.AccountInfo.token);
              localStorage.setItem('CompanyId', res.data.AccountInfo.CompanyId);
              localStorage.setItem('ProductId', res.data.AccountInfo.ProductId);
              localStorage.setItem('ProjectId', res.data.AccountInfo.ProjectId);
              localStorage.setItem(
                'SiUsername',
                res.data.AccountInfo.SiUsername,
              );
              localStorage.setItem('userid', res.data.AccountInfo.UserId);
              localStorage.setItem('group', res.data.AccountInfo.Group);
            }
            setTimeout(() => {
              localStorage.setItem('pageNow', 'CreateCold');
              window.location.reload();
            }, 1000);
          }
        });
    } else {
      alert('Please Enter Username and or Password');
    }
  };

  public render() {
    if (localStorage.getItem('login') == 'true') {
      localStorage.setItem('pageNow', 'CreateCold');
      window.location.reload();
    }
    if (this.state.loading) {
      return (
        <Wrapper>
          <Placeholder />
        </Wrapper>
      );
    }
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/login.css" />
        </Helmet>
        <Page>
          <div>
            <div className="container">
              <div className="card card-container">
                <img
                  id="profile-img"
                  className="profile-img-card"
                  src="/assets/img/avatar_2x.png"
                  alt=""
                />
                <p id="profile-name" className="profile-name-card" />
                {/* <form className="form-signin"> */}
                <span id="reauth-email" className="reauth-email" />
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username or email"
                  required
                />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  required
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.doLogin();
                    }
                  }}
                />
                {/* <div id="remember" className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me"> Remember me
                      </label>
                  </div> */}
                <button
                  className="btn btn-lg btn-primary btn-block btn-signin"
                  onClick={this.doLogin}
                >
                  Sign in
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </Page>
      </>
    );
  }
}
