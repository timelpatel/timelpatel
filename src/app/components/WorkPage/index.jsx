import React from 'react'
import { Link } from 'react-router-dom'


const WorkPage = () => (
    <div>

        <div className='container'>

            <div className='row'>
                <div className='col col4'>
                    <h3>Banking &amp; Financial Services</h3>
                    <ul className='list__bullet'>
                        <li>HSBC for Deloitte MCS</li>
                        <li>Lloyds Banking Group</li>
                    </ul>

                    <h3>Digital Advertising</h3>
                    <ul className='list__bullet'>
                        <li>Billington Cartmell</li>
                        <li>Dare Digital</li>
                        <li>Deloitte Digital</li>
                        <li>Investis</li>
                        <li>Reflector Interactive</li>
                        <li>Steak Digital</li>
                        <li>Tequila</li>
                        <li>TMP Worldwide</li>
                    </ul>
                </div>

                <div className='col col4'>
                    <h3>Gaming &amp; Entertainment</h3>
                    <ul className='list__bullet'>
                        <li>Camelot Group</li>
                        <li>Ideaworks 3D</li>
                    </ul>

                    <h3>Government &amp; Public Sector</h3>
                    <ul className='list__bullet'>
                        <li>National Archives</li>
                    </ul>

                    <h3>Information</h3>
                    <ul className='list__bullet'>
                        <li>Reed Business Information for Valtech</li>
                    </ul>
                </div>

                <div className='col col4'>
                    <h3>Media &amp; Broadcasting</h3>
                    <ul className='list__bullet'>
                        <li>BBC Worldwide</li>
                    </ul>

                    <h3>Retail</h3>
                    <ul className='list__bullet'>
                        <li>Comet Group, Rickmansworth</li>
                    </ul>

                    <h3>Technology Start-up</h3>
                    <ul className='list__bullet'>
                        <li>Evi Technologies</li>
                        <li>Livedrive Internet</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='container work__logo'>
            <div className='row'>
                <div className='col col3'>
                    <img alt='BBC logo' src='/assets/img/logo-bbc.svg' width='150' />
                </div>
                <div className='col col3'>
                    <img alt='Deloitte logo' src='/assets/img/logo-deloitte.svg' width='150' />
                </div>
                <div className='col col3'>
                    <img alt='HSBC logo' src='/assets/img/logo-hsbc.svg' width='150' />
                </div>
                <div className='col col3'>
                    <img alt='Lloyds Banking Group logo' src='/assets/img/logo-lbg.svg' width='150' />
                </div>
            </div>
        </div>

        <div className='container work__project'>
            <div className='row'>
                <div className='col col6'>
                    <h3>Lloyds Banking Group</h3>
                    <h4>Bank of Scotland public website</h4>
                    <p>Led a team of developers to build the Bank of Scotland public website. Used kanban agile methodology to manage workload and provided support for other team members.</p>
                    <p><a href='https://www.bankofscotland.co.uk'>bankofscotland.co.uk</a></p>
                </div>
                <div className='col col6'>
                    <div className='desktop-frame'>
                        <img
                            className='shadow'
                            src='/assets/img/project-bos.png'
                            width='60%'
                            alt='Bank of Scotland website'
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='container work__project alt'>
            <div className='row'>
                <div className='col col6'>
                    <div className='desktop-frame'>
                        <img
                            className='shadow'
                            src='/assets/img/project-hfax.jpg'
                            width='60%'
                            alt=''
                        />
                    </div>
                </div>
                <div className='col col6'>
                    <h3>Lloyds Banking Group</h3>
                    <h4>Halifax Car Finance</h4>
                    <p>Worked in a small agile team to build a brand new car finance loan journey for Halifax Internet Banking customers.</p>
                    <p><a href='https://www.halifax.co.uk'>halifax.co.uk</a></p>
                </div>
            </div>
        </div>

        <div className='container work__project'>
            <div className='row'>
                <div className='col col6'>
                    <h3>Lloyds Banking Group</h3>
                    <h4>Lloyds Bank and TSB Demerger</h4>
                    <p>Took part in the rebrand of Lloyds TSB Bank into two seperate UK banks in a high-profile, classified project.</p>
                    <p>
                        <a href='https://www.lloydsbank.com'>lloydsbank.com</a><br />
                        <a href='https://www.tsb.co.uk'>tsb.co.uk</a>
                    </p>
                </div>
                <div className='col col6'>
                    <div className='desktop-frame'>
                        <img
                            className='shadow'
                            src='/assets/img/project-lloyds.png'
                            width='60%'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='container work__project alt'>
            <div className='row'>
                <div className='col col6'>
                    <div className='desktop-frame'>
                        <img
                            className='shadow'
                            src='/assets/img/project-evi.png'
                            height='300'
                            width='auto'
                            alt='Evi home screen'
                        />
                    </div>
                </div>
                <div className='col col6'>
                    <h3>Evi Technologies</h3>
                    <h4>The Evi app</h4>
                    <p>Created pixel-perfect views for this Cambridge based artificial intelligence start-up, which is now part of the Amazon Group of companies.</p>
                    <p><a href='https://www.evi.com'>evi.com</a></p>
                </div>
            </div>
        </div>

        <div className='container work__project'>
            <div className='row'>
                <div className='col col6'>
                    <h3>Livedrive</h3>
                    <h4>Cloud storage software</h4>
                    <p>Provided full art direction, creating all digital assets as well as user interface development. Helped the company launch a suite of products and features including websites, mobile and desktop applications and marketing materials.</p>
                    <p><a href='https://www.livedrive.com'>livedrive.com</a></p>
                </div>
                <div className='col col6'>
                    <div className='desktop-frame'>
                        <img
                            alt='Computer files flying out of a folder'
                            src='/assets/img/project-livedrive.png'
                            width='70%'
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
)


export default WorkPage
