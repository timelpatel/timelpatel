import React from 'react'
import { Link } from 'react-router-dom'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../../component/block/typography/subtle-title/index.jsx'
import Template__Tp from '../../../component/module/template/tp/index.jsx'


const WorkPage = () => (
    <Template__Tp>

        <div className='container'>

            <div className='row'>
                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Banking &amp; Financial Services'
                    />
                    <ul className='list__bullet'>
                        <li>Deloitte</li>
                        <li>HSBC</li>
                        <li>Lloyds Banking Group</li>
                    </ul>

                    <Typography__Sub_Heading
                        text='Digital Services'
                    />
                    <ul className='list__bullet'>
                        <li>Billington Cartmell</li>
                        <li>Dare Digital</li>
                        <li>Deloitte Digital</li>
                        <li>Investis</li>
                        <li>Reflector Interactive</li>
                        <li>Steak Digital</li>
                        <li>Tequila</li>
                        <li>TMP Worldwide</li>
                        <li>Wipro Digital</li>
                    </ul>
                </div>

                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Gaming &amp; Entertainment'
                    />
                    <ul className='list__bullet'>
                        <li>Camelot Group</li>
                        <li>Ideaworks 3D</li>
                    </ul>

                    <Typography__Sub_Heading
                        text='Government &amp; Public Sector'
                    />
                    <ul className='list__bullet'>
                        <li>The National Archives</li>
                    </ul>

                    <Typography__Sub_Heading
                        text='Information'
                    />
                    <ul className='list__bullet'>
                        <li>Reed Business Information for Valtech</li>
                    </ul>
                </div>

                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Media &amp; Broadcasting'
                    />
                    <ul className='list__bullet'>
                        <li>BBC Worldwide</li>
                    </ul>

                    <Typography__Sub_Heading
                        text='Retail'
                    />
                    <ul className='list__bullet'>
                        <li>Comet Group</li>
                    </ul>

                    <Typography__Sub_Heading
                        text='Technology Start-up'
                    />
                    <ul className='list__bullet'>
                        <li>Evi Technologies (an Amazon company)</li>
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
                    <Typography__Sub_Heading
                        text='Lloyds Banking Group'
                    />
                    <Typography__Subtle_Title
                        text='Bank of Scotland public website'
                    />
                    <Typography__Body_Copy
                        text='Led a team of developers to build the Bank of Scotland public website. Used kanban agile methodology to manage workload and provided support for other team members.'
                    />
                    <Typography__Body_Copy>
                        <a href='https://www.bankofscotland.co.uk'>bankofscotland.co.uk</a>
                    </Typography__Body_Copy>
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
                    <Typography__Sub_Heading
                        text='Lloyds Banking Group'
                    />
                    <Typography__Subtle_Title
                        text='Halifax Car Finance'
                    />
                    <Typography__Body_Copy
                        text='Worked in a small agile team to build a brand new car finance loan journey for Halifax Internet Banking customers.'
                    />
                    <Typography__Body_Copy>
                        <a href='https://www.halifax.co.uk'>halifax.co.uk</a>
                    </Typography__Body_Copy>
                </div>
            </div>
        </div>

        <div className='container work__project'>
            <div className='row'>
                <div className='col col6'>
                    <Typography__Sub_Heading
                        text='Lloyds Banking Group'
                    />
                    <Typography__Subtle_Title
                        text='Lloyds Bank and TSB Demerger'
                    />
                    <Typography__Body_Copy
                        text='Took part in the rebrand of Lloyds TSB Bank into two seperate UK banks in a high-profile, classified project.'
                    />
                    <Typography__Body_Copy>
                        <a href='https://www.lloydsbank.com'>lloydsbank.com</a><br />
                        <a href='https://www.tsb.co.uk'>tsb.co.uk</a>
                    </Typography__Body_Copy>
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
                    <Typography__Sub_Heading
                        text='Evi Technologies'
                    />
                    <Typography__Subtle_Title
                        text='The Evi app'
                    />
                    <Typography__Body_Copy
                        text='Created pixel-perfect views for this Cambridge based artificial intelligence start-up, which is now part of the Amazon Group of companies.'
                    />
                    <Typography__Body_Copy>
                        <a href='https://www.evi.com'>evi.com</a>
                    </Typography__Body_Copy>
                </div>
            </div>
        </div>

        <div className='container work__project'>
            <div className='row'>
                <div className='col col6'>
                    <Typography__Sub_Heading
                        text='Livedrive'
                    />
                    <Typography__Subtle_Title
                        text='Cloud storage software'
                    />
                    <Typography__Body_Copy
                        text='Provided full art direction, creating all digital assets as well as user interface development. Helped the company launch a suite of products and features including websites, mobile and desktop applications and marketing materials.'
                    />
                    <Typography__Body_Copy>
                        <a href='https://www.livedrive.com'>livedrive.com</a>
                    </Typography__Body_Copy>
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

    </Template__Tp>
)


export default WorkPage
