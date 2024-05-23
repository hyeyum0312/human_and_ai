'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import "./details.scss";
import InputField from '@/components/form/InputField';
import "@/styles/scss/var/_button.scss"
import SvgIcon from '@/components/Icon/SvgIcon'

interface DetailLayoutProps {
  children: React.ReactNode;
}

export default function Details({ children }: Readonly<DetailLayoutProps>) {
  const pathname = usePathname();
  const [detailId, setDetailId] = useState<string | null>(null);
  const { isDesktop } = useDevice();

  useEffect(() => {
    const parts = pathname?.split('/');
    const id = parts?.length ? parts[parts.length - 1] : null;
    setDetailId(id);
  }, [pathname]);


  if (!isDesktop) {
    return <div>Mobile Not Supported</div>;
  }

  if (!detailId) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detailPage'>
      <div className='wrap'>
        <div className='detailItem'>
          <div className='wrap'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11760_112163)"><path d="M16.6667 12.2222C15 12.2222 12.9511 16.1633 12.7778 17.7777C12.5439 19.9527 13.8889 19.9999 13.8889 19.9999H20V14.4444C20 14.4444 18.09 12.2222 16.6667 12.2222Z" fill="#50A5E6"></path><path d="M16.1065 16.2824C17.0037 14.7285 17.3781 13.2651 16.9429 13.0138C16.5076 12.7625 15.4275 13.8185 14.5303 15.3724C13.6332 16.9263 13.2587 18.3897 13.694 18.641C14.1292 18.8923 15.2093 17.8363 16.1065 16.2824Z" fill="#1C6399"></path><path d="M11.1588 0C11.815 0 12.3466 0.531667 12.3466 1.18778C12.3466 1.62611 12.7177 7.20111 12.7177 7.20111L9.97107 10V1.18778C9.97107 0.531667 10.5027 0 11.1588 0Z" fill="#F9CA55"></path><path d="M10.4862 2.40163C10.4862 1.79108 10.9595 1.29663 11.5434 1.29663C12.1273 1.29663 12.6006 1.79163 12.6006 2.40163C12.6006 2.40163 12.8978 5.70274 13.2628 7.60719C13.7506 8.64385 14.0234 10.2083 13.9634 11.0783C13.9934 11.2994 17.0884 13.8594 17.0884 13.8594C16.9323 14.8666 15.8334 17.2789 14.4445 18.3922L12.4884 16.7677C10.8856 16.5433 10.0117 14.9172 10.0117 14.3989C10.0117 12.7411 10.4862 2.40163 10.4862 2.40163Z" fill="#FFDC5D"></path><path d="M3.33333 12.2222C5 12.2222 7.04889 16.1633 7.22222 17.7777C7.45611 19.9527 6.11111 19.9999 6.11111 19.9999H0V14.4444C0 14.4444 1.91 12.2222 3.33333 12.2222Z" fill="#50A5E6"></path><path d="M6.3054 18.6403C6.74065 18.389 6.3662 16.9256 5.46904 15.3716C4.57189 13.8177 3.49176 12.7617 3.05652 13.013C2.62127 13.2643 2.99572 14.7277 3.89288 16.2816C4.79003 17.8356 5.87016 18.8915 6.3054 18.6403Z" fill="#1C6399"></path><path d="M8.92275 0.00610274C8.21941 -0.0644528 7.62664 0.486103 7.62664 1.17444C7.62664 1.60777 7.52441 6.90721 7.52441 6.90721L9.94164 9.99999L9.97608 1.24166C9.97608 0.627214 9.53441 0.0672138 8.92275 0.00610274Z" fill="#F9CA55"></path><path d="M9.51384 2.40163C9.51384 1.79108 9.04051 1.29663 8.45662 1.29663C7.87273 1.29663 7.3994 1.79163 7.3994 2.40163C7.3994 2.40163 7.10218 5.70274 6.73718 7.60719C6.2494 8.64385 5.97662 10.2083 6.03662 11.0783C6.00662 11.2994 2.91162 13.8594 2.91162 13.8594C3.06773 14.8666 4.16662 17.2789 5.55551 18.3922L7.51162 16.7677C9.1144 16.5433 9.98829 14.9172 9.98829 14.3989C9.98829 12.7411 9.51384 2.40163 9.51384 2.40163Z" fill="#FFDC5D"></path><path d="M9.97672 14.3462C9.74673 14.3462 9.56006 14.1595 9.56006 13.9295V1.55119C9.56006 1.32119 9.74673 1.13452 9.97672 1.13452C10.2067 1.13452 10.3934 1.32119 10.3934 1.55119V13.9301C10.3939 14.1595 10.2073 14.3462 9.97672 14.3462Z" fill="#F9CA55"></path></g><defs><clipPath id="clip0_11760_112163"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
            <p className='autoTitle'>여보, 사도 돼?</p>
          </div>
          <p className='description'>사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴</p>
          <div className='subjectChip'>
            <span className='item'>범용/일반</span>
            <span className='item'>글짓기</span>
            <span className='item'>엔터테인먼트</span>
          </div>
          <hr className='divider'/>

          <div className='formBox'>

            <div className='contents'>
              <p className='fieldTitle'>무엇을 사고 싶으세요?</p>
              <p className='fieldDesc'>사고 싶은 물건을 적어주세요.</p>
              <InputField/>
            </div>

            <div className='contents'>
              <p className='fieldTitle'>무엇을 사고 싶으세요?</p>
              <p className='fieldDesc'>사고 싶은 물건을 적어주세요.</p>
              <InputField/>
            </div>

            <div className='contents'>
              <p className='fieldTitle'>무엇을 사고 싶으세요?</p>
              <p className='fieldDesc'>사고 싶은 물건을 적어주세요.</p>
              <InputField/>
            </div>
          </div>

          <button className='aiAutoCreation' disabled>
            <SvgIcon icon="ai" size="27px" color="red" />
            자동생성
          </button>

          <div>
            <p>현재 글자수: <span>0</span>자 (<span>0</span>byte )</p>
            <p>입력 가능 토큰: <span>0</span>/<span>2000</span> 토큰</p>
          </div>
          

        </div>

        <div className='detailItem'>
            <div className='aiResult --default'>
              <SvgIcon icon="ai" size="50px" color="white" />
              <p className='comment'>자동 생성을 눌러보세요!</p>
            </div>
        </div>

      </div>
    </div>
    
  );
}