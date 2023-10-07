import React from 'react'
import './about.css'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import img from '../../assets/about.jpg'

export default function About() {
    return (
        <div className="about_container">
            <div className='container'>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                    <div className="left">
                        <h3>What we Do</h3>
                        <p>Everyone has right to freedom of thought,conscience and religion;this right includes</p>
                        <p>freedom to change his religion or belief,and freedom,either alone or in community with</p>
                        <p>others and in public or private</p>

                        <div>
                            <div> <Checkbox defaultChecked /> <span>Travel Agency problem solution</span></div>
                            <div><Checkbox defaultChecked /> <span>Travel Agency problem solution</span></div>
                            <div><Checkbox defaultChecked /> <span>Travel Agency problem solution</span></div>
                            <div> <Checkbox defaultChecked /> <span>Travel Agency problem solution</span></div>
                        </div>

                    </div>
                    <div className="center">
                        <p>About</p>
                        <div className="line"></div>
                    </div>
                    <div className="right">
                        <h3>Who We Are</h3>
                        <p>Everyone has right to freedom of thought,conscience and religion;this right includes</p>
                        <p>freedom to change his religion or belief,and freedom,either alone or in community with</p>
                        <p>others and in public or private</p>
                         <div
                           style={{
                            display:'flex',
                            gap:5
                           }}
                         >
                            <img
                                    src={img}
                                    width="150"
                                    alt=""
                                    style={{borderRadius:'15px'}}
                                />
                                <div>
                                    <h4>Topic</h4>
                                    <div>
                                    <p>Everyone has right to freedom of thought,conscience and religion;this right includes</p>
                                    <p>freedom to change his religion or belief,and freedom,either alone or in community with</p>
                                    <p>others and in public or private</p>
                                    </div>
                                </div>
                         </div>
                         <div
                           style={{
                            display:'flex',
                            gap:5
                           }}
                         >
                                <div>
                                    <h4>Topic</h4>
                                    <div>
                                    <p>Everyone has right to freedom of thought,conscience and religion;this right includes</p>
                                    <p>freedom to change his religion or belief,and freedom,either alone or in community with</p>
                                    <p>others and in public or private</p>
                                    </div>
                                </div>
                                <img
                                src={img}
                                width="150"
                                alt=""
                                style={{borderRadius:'15px'}}
                            />
                         </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
