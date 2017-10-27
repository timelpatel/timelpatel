import React from 'react'


const WorkPage = () => (
    <div>

        <div className='container'>
            <h2>Clients</h2>
            <p></p>

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

    </div>
)


export default WorkPage
