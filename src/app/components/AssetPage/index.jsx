import React from 'react'
import {Link} from 'react-router-dom'


const AssetPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h3><Link to='/block-component-design'>BCD</Link></h3>

                    <h1>Assets</h1>
                    <p>Assets allow us to moderate a strict branding policy across our application, by only allowing pre-defined values. These rules can be enforced at Engineering level using test scripts, for example. Maybe Blocks do not accept hex colour values or font and icons can not be hardcoded into the styling file.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Folder structure</h2>
                    <p>Like our Components, Assets are stored in the root of the BCD folder. Some assets are then categorised, whilst others are put into the name of the asset.</p>
                    <p>Below is a sample folder structure for what you might expect to find.</p>

                    <p className='folder'>
                        /asset<br />
                        &nbsp;├── /colour<br />
                        &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /style.css<br />
                        &nbsp;|<br />
                        &nbsp;├── /font<br />
                        &nbsp;| &nbsp;&nbsp; └── /font-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── font-name.tff<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── font-name.woff<br />
                        &nbsp;|<br />
                        &nbsp;└── /grid<br />
                        &nbsp;| &nbsp;&nbsp; └── /style.css<br />
                        &nbsp;|<br />
                        &nbsp;└── /icon<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /icon-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── icon-name.png<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── icon-name.svg
                    </p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Breaking down Assets</h2>

                    <h3>Colour</h3>
                    <p>Defining colours into useful categories is a nice way to make sure you do not have uncessesory colours, which are similar.</p>

                </div>
            </div>
        </div>

    </div>

)


export default AssetPage
