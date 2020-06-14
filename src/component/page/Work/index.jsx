import React from 'react'
import Collection__Project from '../../../component/module/collection/project/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import Header_Footer__Header from '../../../header-footer/header/index.jsx'
import Header_Footer__Footer from '../../../header-footer/footer/index.jsx'
import Imagery__logos from '../../../component/block/imagery/logos/index.jsx'
import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'


const WorkPage = () => (

    <React.Fragment>        
        <Header_Footer__Header />

        <Container__Section>

            <div className='row'>
                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Banking &amp; Financial Services'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Deloitte'},
                                {id: 2, text:'HSBC'},
                                {id: 3, text:'Lloyds Banking Group'},
                            ]
                        }
                    />

                    <Typography__Sub_Heading
                        text='Digital Services'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Billington Cartmell'},
                                {id: 2, text:'Dare Digital'},
                                {id: 3, text:'Deloitte Digital'},
                                {id: 4, text:'Investis'},
                                {id: 5, text:'Reflector Interactive'},
                                {id: 6, text:'Steak Digital'},
                                {id: 7, text:'Tequila'},
                                {id: 8, text:'TMP Worldwide'},
                                {id: 9, text:'Wipro Digital'},
                            ]
                        }
                    />
                </div>

                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Gaming &amp; Entertainment'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Camelot Group'},
                                {id: 2, text:'Ideaworks 3D'},
                            ]
                        }
                    />

                    <Typography__Sub_Heading
                        text='Government &amp; Public Sector'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'The National Archives'},
                            ]
                        }
                    />

                    <Typography__Sub_Heading
                        text='Information'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Reed Business Information for Valtech'},
                            ]
                        }
                    />
                </div>

                <div className='col col4'>
                    <Typography__Sub_Heading
                        text='Media &amp; Broadcasting'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'BBC Worldwide'},
                            ]
                        }
                    />

                    <Typography__Sub_Heading
                        text='Retail'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Comet Group'},
                            ]
                        }
                    />

                    <Typography__Sub_Heading
                        text='Technology Start-up'
                    />
                    <Typography__Bullet_List
                        listItems={
                            [
                                {id: 1, text:'Evi Technologies (an Amazon company)'},
                                {id: 2, text:'Livedrive Internet'},
                            ]
                        }
                    />
                </div>
            </div>
        </Container__Section>

        <Container__Section alt='alt'>
            <Imagery__logos 
                logos={
                    [
                        {id: 1, alt: 'BBC logo', src: '/assets/img/logo-bbc.svg'},
                        {id: 2, alt: 'Deloitte logo', src: '/assets/img/logo-deloitte.svg'},
                        {id: 3, alt: 'HSBC logo', src: '/assets/img/logo-hsbc.svg'},
                        {id: 4, alt: 'Lloyds Banking Group logo', src: '/assets/img/logo-lbg.svg'},
                    ]
                }
            />
        </Container__Section>

        <Collection__Project 
            projects={
                [
                    {
                        id: 1,
                        alt: 'Bank of Scotland website',
                        client: 'Lloyds Banking Group',
                        src: '/assets/img/project-bos.png',
                        summary: 'Led a team of developers to build the Bank of Scotland public website. Used kanban agile methodology to manage workload and provided support for other team members.',
                        title: 'Bank of Scotland public website',
                        url: 'bankofscotland.co.uk',
                        width: '60%',
                    },
                    {
                        id: 2,
                        alt: '',
                        client: 'Lloyds Banking Group',
                        flip: true,
                        src: '/assets/img/project-hfax.jpg',
                        summary: 'Worked in a small agile team to build a brand new car finance loan journey for Halifax Internet Banking customers.',
                        title: 'Halifax Car Finance',
                        url: 'halifax.co.uk',
                        width: '60%',
                    },
                    {
                        id: 3,
                        alt: 'Lloyds Bank rebranded screen',
                        client: 'Lloyds Banking Group',
                        src: '/assets/img/project-lloyds.png',
                        summary: 'Took part in the rebrand of Lloyds TSB Bank into two seperate UK banks in a high-profile, classified project.',
                        title: 'Lloyds Bank and TSB Demerger',
                        url: 'lloydsbank.com',
                        width: '60%',
                    },
                    {
                        id: 4,
                        alt: 'Evi home screen',
                        client: 'Evi Technologies',
                        flip: true,
                        height: '300',
                        src: '/assets/img/project-evi.png',
                        summary: 'Created pixel-perfect views for this Cambridge based artificial intelligence start-up, which is now part of the Amazon Group of companies.',
                        title: 'The Evi app',
                        url: 'evi.com',
                        width: 'auto',
                    },
                    {
                        id: 5,
                        alt: 'Computer files flying out of a folder',
                        client: 'Livedrive',
                        src: '/assets/img/project-livedrive.png',
                        summary: 'Provided full art direction, creating all digital assets as well as user interface development. Helped the company launch a suite of products and features including websites, mobile and desktop applications and marketing materials.',
                        title: 'Cloud storage software',
                        url: 'livedrive.com',
                        width: '60%',
                    },
                ]
            }
        />

        <Header_Footer__Footer />
    </React.Fragment>
)


export default WorkPage
