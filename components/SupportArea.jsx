import React from 'react'
import {MdLocalShipping} from 'react-icons/md'
import {Ri24HoursLine} from 'react-icons/ri'
import {BsCurrencyDollar} from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation';
  
const SupportArea = () => {
    const { t } = useTranslation();

  return (
    <div className="support-area">
        <div className="container">
            <div className="row feature-icon-two-wrap">
            <div className="col-md-4">
                <div className="support-wrap-2">
                <div className="support-content-2">
                    <MdLocalShipping className='icon'/>
                    <h5>{t('home:Free Shipping')}</h5>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="support-wrap-2">
                <div className="support-content-2">
                    <Ri24HoursLine className='icon'/>
                    <h5>{t('home:Support 24/7')}</h5>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="support-wrap-2">
                    <div className="support-content-2">
                        <BsCurrencyDollar className='icon'/>
                        <h5>{t('home:Money Return')}</h5>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default SupportArea