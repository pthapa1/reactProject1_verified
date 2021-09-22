import React, { useState } from 'react';
import './header.css';
import { MobileMenu } from './MobileMenu.style';
import { SimpleColoseBtn } from './simpleClosebtn.styled';
import { LoginButton } from './LoginButtons.styled';
import { ReactComponent as FacebookIcon } from './svg/FacebookIcon.svg';
import { ReactComponent as GoogleIcon } from './svg/GoogleIcon.svg';
import { ReactComponent as GithubIcon } from './svg/GithubIcon.svg';
// importing the new button.
import GoogleLogInOut from '../login/GoogleLogInOut';

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [xline, setXline] = useState(false);
  const makeX = () => {
    setXline(!xline);
  };
  const toggleClass = () => {
    setActive(!isActive);
  };

  const removeClassAndCloseMenu = () => {
    setActive(!isActive);
    setXline(false);
  };

  const [show, setShow] = useState();
  return (
    <React.Fragment>
      <nav className='nav-bar'>
        <a href='/' className='logolink'>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='92.000000pt'
            height='40.000000pt'
            viewBox='0 0 462.000000 78.000000'
            preserveAspectRatio='xMidYMid meet'
            className='svgclass'
          >
            <g
              transform='translate(0.000000,78.000000) scale(0.100000,-0.100000)'
              fill='#04c38e'
              stroke='none'
            >
              <path
                d='M1766 744 c-30 -30 -9 -84 33 -84 21 0 51 30 51 52 0 19 -32 48 -53
48 -8 0 -23 -7 -31 -16z'
              />
              <path
                d='M2123 741 c-52 -24 -73 -63 -73 -136 l0 -55 -50 0 c-49 0 -50 -1 -50
-30 0 -29 1 -30 50 -30 l50 0 0 -235 0 -235 30 0 30 0 0 235 0 235 80 0 80 0
0 30 0 30 -80 0 -80 0 0 40 c0 53 17 86 51 101 28 11 74 9 110 -6 10 -4 19 2
27 19 10 23 8 25 -29 40 -52 21 -95 20 -146 -3z'
              />
              <path
                d='M2456 747 c-28 -20 -18 -69 16 -81 51 -18 89 42 50 77 -22 20 -42 21
-66 4z'
              />
              <path
                d='M3740 612 c0 -82 -3 -152 -6 -155 -4 -3 -15 5 -26 19 -11 13 -39 34
-61 47 -58 30 -174 30 -232 0 -108 -57 -161 -173 -135 -297 26 -126 122 -206
246 -206 78 0 126 19 177 68 l37 36 0 -52 c0 -51 1 -52 30 -52 l30 0 0 370 0
370 -30 0 -30 0 0 -148z m-95 -152 c40 -25 80 -88 89 -141 16 -91 -44 -204
-120 -229 -55 -18 -146 -8 -188 20 -128 88 -104 313 39 366 53 19 135 12 180
-16z'
              />
              <path
                d='M30 717 c0 -1 69 -157 153 -347 l153 -345 36 -3 36 -3 142 323 c79
178 149 335 157 351 l14 27 -38 0 -38 0 -131 -296 c-71 -163 -134 -296 -140
-296 -5 0 -67 133 -139 296 l-130 296 -37 0 c-21 0 -38 -1 -38 -3z'
              />
              <path
                d='M4269 557 c-190 -53 -253 -292 -116 -435 54 -57 102 -77 187 -77 57
0 84 5 115 22 125 67 179 215 125 341 -51 118 -187 183 -311 149z m221 -185
c0 -19 -170 -152 -194 -152 -20 0 -89 97 -82 115 9 24 22 18 56 -25 l31 -39
81 59 c85 63 108 72 108 42z'
              />
              <path
                d='M900 541 c-76 -23 -148 -89 -171 -157 -7 -22 -13 -66 -13 -99 0 -78
18 -128 63 -178 51 -57 120 -87 202 -87 116 0 215 51 190 99 -13 23 -26 27
-36 11 -16 -26 -86 -50 -145 -50 -113 0 -180 50 -206 155 l-6 25 221 0 221 0
0 38 c0 162 -168 289 -320 243z m138 -66 c62 -26 100 -71 116 -137 l6 -28
-191 0 -191 0 6 25 c12 49 25 71 57 103 52 51 128 65 197 37z'
              />
              <path
                d='M1370 285 l0 -265 35 0 35 0 0 163 c0 136 3 168 19 203 23 52 70 85
127 92 43 4 44 6 44 39 l0 35 -42 -7 c-56 -10 -90 -28 -121 -65 -14 -16 -28
-30 -31 -30 -3 0 -6 23 -6 50 0 49 -1 50 -30 50 l-30 0 0 -265z'
              />
              <path d='M1760 285 l0 -265 35 0 35 0 0 265 0 265 -35 0 -35 0 0 -265z' />
              <path d='M2450 285 l0 -265 35 0 35 0 0 265 0 265 -35 0 -35 0 0 -265z' />
              <path
                d='M2842 536 c-100 -33 -162 -114 -170 -224 -8 -118 34 -205 124 -258
67 -40 187 -46 261 -14 28 12 59 30 69 41 16 18 16 20 0 38 -18 20 -19 20 -59
-7 -56 -37 -165 -44 -225 -13 -50 26 -91 77 -99 125 l-6 36 223 0 222 0 -7 53
c-9 68 -25 105 -65 151 -64 72 -175 102 -268 72z m166 -67 c47 -23 88 -75 98
-127 l7 -32 -188 0 -188 0 6 36 c13 77 96 143 181 144 22 0 59 -10 84 -21z'
              />
            </g>
          </svg>
        </a>
        <ul className={`menu-list ${isActive ? 'menu-list-active' : ''}`}>
          <li>
            <a
              href='#'
              className='eachmenulink'
              onClick={() => {
                removeClassAndCloseMenu();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='eachmenulink'
              onClick={removeClassAndCloseMenu}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='eachmenulink'
              onClick={removeClassAndCloseMenu}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='#'
              className='eachmenulink log-in'
              onClick={() => {
                removeClassAndCloseMenu();
                setShow(true);
              }}
            >
              Log In
            </a>
          </li>
        </ul>
        <div
          onClick={() => {
            toggleClass();
          }}
        >
          <MobileMenu xline={xline} makeX={makeX} />
        </div>
      </nav>
      <section className={`display-home ${show ? 'modal-bg' : ''}`}>
        <div className='modal'>
          <h3>Log in to</h3>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='78.000000pt'
            height='30.000000pt'
            viewBox='0 0 462.000000 78.000000'
            preserveAspectRatio='xMidYMid meet'
            class='svgclass'
          >
            <g
              transform='translate(0.000000,78.000000) scale(0.100000,-0.100000)'
              fill='#04c38e'
              stroke='none'
            >
              <path
                d='M1766 744 c-30 -30 -9 -84 33 -84 21 0 51 30 51 52 0 19 -32 48 -53
48 -8 0 -23 -7 -31 -16z'
              />
              <path
                d='M2123 741 c-52 -24 -73 -63 -73 -136 l0 -55 -50 0 c-49 0 -50 -1 -50
-30 0 -29 1 -30 50 -30 l50 0 0 -235 0 -235 30 0 30 0 0 235 0 235 80 0 80 0
0 30 0 30 -80 0 -80 0 0 40 c0 53 17 86 51 101 28 11 74 9 110 -6 10 -4 19 2
27 19 10 23 8 25 -29 40 -52 21 -95 20 -146 -3z'
              />
              <path
                d='M2456 747 c-28 -20 -18 -69 16 -81 51 -18 89 42 50 77 -22 20 -42 21
-66 4z'
              />
              <path
                d='M3740 612 c0 -82 -3 -152 -6 -155 -4 -3 -15 5 -26 19 -11 13 -39 34
-61 47 -58 30 -174 30 -232 0 -108 -57 -161 -173 -135 -297 26 -126 122 -206
246 -206 78 0 126 19 177 68 l37 36 0 -52 c0 -51 1 -52 30 -52 l30 0 0 370 0
370 -30 0 -30 0 0 -148z m-95 -152 c40 -25 80 -88 89 -141 16 -91 -44 -204
-120 -229 -55 -18 -146 -8 -188 20 -128 88 -104 313 39 366 53 19 135 12 180
-16z'
              />
              <path
                d='M30 717 c0 -1 69 -157 153 -347 l153 -345 36 -3 36 -3 142 323 c79
178 149 335 157 351 l14 27 -38 0 -38 0 -131 -296 c-71 -163 -134 -296 -140
-296 -5 0 -67 133 -139 296 l-130 296 -37 0 c-21 0 -38 -1 -38 -3z'
              />
              <path
                d='M4269 557 c-190 -53 -253 -292 -116 -435 54 -57 102 -77 187 -77 57
0 84 5 115 22 125 67 179 215 125 341 -51 118 -187 183 -311 149z m221 -185
c0 -19 -170 -152 -194 -152 -20 0 -89 97 -82 115 9 24 22 18 56 -25 l31 -39
81 59 c85 63 108 72 108 42z'
              />
              <path
                d='M900 541 c-76 -23 -148 -89 -171 -157 -7 -22 -13 -66 -13 -99 0 -78
18 -128 63 -178 51 -57 120 -87 202 -87 116 0 215 51 190 99 -13 23 -26 27
-36 11 -16 -26 -86 -50 -145 -50 -113 0 -180 50 -206 155 l-6 25 221 0 221 0
0 38 c0 162 -168 289 -320 243z m138 -66 c62 -26 100 -71 116 -137 l6 -28
-191 0 -191 0 6 25 c12 49 25 71 57 103 52 51 128 65 197 37z'
              />
              <path
                d='M1370 285 l0 -265 35 0 35 0 0 163 c0 136 3 168 19 203 23 52 70 85
127 92 43 4 44 6 44 39 l0 35 -42 -7 c-56 -10 -90 -28 -121 -65 -14 -16 -28
-30 -31 -30 -3 0 -6 23 -6 50 0 49 -1 50 -30 50 l-30 0 0 -265z'
              />
              <path d='M1760 285 l0 -265 35 0 35 0 0 265 0 265 -35 0 -35 0 0 -265z' />
              <path d='M2450 285 l0 -265 35 0 35 0 0 265 0 265 -35 0 -35 0 0 -265z' />
              <path
                d='M2842 536 c-100 -33 -162 -114 -170 -224 -8 -118 34 -205 124 -258
67 -40 187 -46 261 -14 28 12 59 30 69 41 16 18 16 20 0 38 -18 20 -19 20 -59
-7 -56 -37 -165 -44 -225 -13 -50 26 -91 77 -99 125 l-6 36 223 0 222 0 -7 53
c-9 68 -25 105 -65 151 -64 72 -175 102 -268 72z m166 -67 c47 -23 88 -75 98
-127 l7 -32 -188 0 -188 0 6 36 c13 77 96 143 181 144 22 0 59 -10 84 -21z'
              />
            </g>
          </svg>
          <br />
          <p className='login-paragraph'>
            and save your work. We won't share anything anywhere.
          </p>

          <LoginButton
            href='#'
            text='Google'
            svgPath={<GoogleIcon />}
            backgroundColor='#4285f4'
            svgPadding='0.8em'
          ></LoginButton>
          <LoginButton
            href='#'
            text='Facebook'
            svgPath={<FacebookIcon />}
            backgroundColor='#1877f2'
            svgPadding='0.5em'
          ></LoginButton>
          <LoginButton
            href='#'
            text='GitHub'
            svgPath={<GithubIcon />}
            backgroundColor='#252525'
            svgPadding='0.8em'
          ></LoginButton>
          <GoogleLogInOut />
          <div onClick={() => setShow(false)}>
            <SimpleColoseBtn className='close-modal'></SimpleColoseBtn>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
