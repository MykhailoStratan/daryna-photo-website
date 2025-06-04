import { Image } from 'primereact/image';
import { memo } from 'react';

function PackagesSection() {
  return (
    <section className="package-section" id="pricing">
      <h1>Package Pricing</h1>
      <div className="package-block">
        <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeWCw-Tx2eP7R2PgRice8ARnoB2-NhESHBHklBqYp7aNkdd-y3EQKuN7rm2CO2S4XUihQCqwX7OPl-MuLKAf1cJ0nDOdLhJr1eWow4yiVp-6efJ1WC4W7Actli0ClkPn2rI-iFMVisROuqZNYV0YFB=w687-h1031-s-no-gm?authuser=0'} width="350px"/>
        <div className="package-description">
          <h3>Portrait / Lifestyle photosession</h3>
          <p><span>Service - </span><span>Studio*/indoor/outdoor session</span></p>
          <p className='note'><span>*Studio price not included</span></p>
          <table>
            <tr>
              <th>Time</th>
              <th>Result</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
            <tr>
              <td>1 hour</td>
              <td>~50 edited photos, 10 retouched</td>
              <td>200$</td>
              <td><a href="#contact"><button>Book</button></a></td>
            </tr>
            <tr>
              <td>2 hours</td>
              <td>~100 photos, 25 retouched</td>
              <td>350$</td>
              <td><a href="#contact"><button>Book</button></a></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="package-block">
        <div className="package-description">
          <h3>Wedding / Elopement / Engagement / Event </h3>
          <p><span>Service - </span><span>a separate plan for each occasion will be created and discussed in details</span></p>
          <table>
            <tr>
              <th>Time</th>
              <th>Result</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
            <tr>
              <td>half of day</td>
              <td>unlimited photo count</td>
              <td>from 750$</td>
              <td><a href="#contact"><button>Book</button></a></td>
            </tr>
            <tr>
              <td>whole day</td>
              <td>unlimited photo count</td>
              <td>from 1500$</td>
              <td><a href="#contact"><button>Book</button></a></td>
            </tr>
          </table>
        </div>
        <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeirh5s5YeKSbuj14BLwrBqys-DdMI4NgLrV3U8L3tHApZ8hnDgF3TXh3ZOvdK7YOc6mh183doTPjvf5XczVXnsea34i731tx4sxd4iCUw06RnaBgPGi0lJdxh6ENVAj2gdUW7ckmAspckY87wWV0g=w688-h1031-s-no-gm?authuser=0'} width="350px"/>
      </div>
      <div className="package-block">
        <Image src={'https://lh3.googleusercontent.com/pw/AP1GczMWGmYKVhZ5Kg_vC7s2Zp3CcvcX3z6IYfZ-j6lR0YHARw0kcGil-5VWEOmoP2KJk51EYL9XLxbXHAqrC_sgcN-1rmoaJQrNvt48lYC_9YMC4pZ-RqYFtjPv5KcYMwj29MBxJzFBOOtOx4E_EAxetsx5=w825-h1031-s-no-gm?authuser=0'} width="350px"/>
        <div className="package-description">
          <h3>Commercial projects</h3>
          <p>Ready for a short-term and long-term commercial projects</p>
          <a href="#contact"><button className='commercial-btn'>Contact for details</button></a>
        </div>
      </div>
      <div className="package-block-mobile" style={{display: 'none'}}>
        <div className="package-description">
          <h3>Portrait / Lifestyle photosession</h3>
          <p><span>Service - </span><span>Studio*/indoor/outdoor session</span></p>
          <p className='note'><span>*Studio price not included</span></p>
        </div>
        <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeWCw-Tx2eP7R2PgRice8ARnoB2-NhESHBHklBqYp7aNkdd-y3EQKuN7rm2CO2S4XUihQCqwX7OPl-MuLKAf1cJ0nDOdLhJr1eWow4yiVp-6efJ1WC4W7Actli0ClkPn2rI-iFMVisROuqZNYV0YFB=w687-h1031-s-no-gm?authuser=0'} width="350px"/>
        <table>
          <tr>
            <th>Time</th>
            <th>Result</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>1 hour</td>
            <td>~50 edited photos, 10 retouched</td>
            <td>200$</td>
            <td><a href="#contact"><button>Book</button></a></td>
          </tr>
          <tr>
            <td>2 hours</td>
            <td>~100 photos, 25 retouched</td>
            <td>350$</td>
            <td><a href="#contact"><button>Book</button></a></td>
          </tr>
        </table>
      </div>
      <div className="package-block-mobile" style={{display: 'none'}}>
        <div className="package-description">
          <h3>Wedding / Elopement / Engagement / Event </h3>
          <p><span>Service - </span><span>a separate plan for each occasion will be created and discussed in details</span></p>
        </div>
        <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeirh5s5YeKSbuj14BLwrBqys-DdMI4NgLrV3U8L3tHApZ8hnDgF3TXh3ZOvdK7YOc6mh183doTPjvf5XczVXnsea34i731tx4sxd4iCUw06RnaBgPGi0lJdxh6ENVAj2gdUW7ckmAspckY87wWV0g=w688-h1031-s-no-gm?authuser=0'} width="350px"/>
        <table>
          <tr>
            <th>Time</th>
            <th>Result</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>half of day</td>
            <td>unlimited photo count</td>
            <td>from 750$</td>
            <td><a href="#contact"><button>Book</button></a></td>
          </tr>
          <tr>
            <td>whole day</td>
            <td>unlimited photo count</td>
            <td>from 1500$</td>
            <td><a href="#contact"><button>Book</button></a></td>
          </tr>
        </table>
      </div>
      <div className="package-block-mobile" style={{display: 'none'}}>
        <div className="package-description">
          <h3>Commercial projects</h3>
          <p>Ready for a short-term and long-term commercial projects</p>
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczMWGmYKVhZ5Kg_vC7s2Zp3CcvcX3z6IYfZ-j6lR0YHARw0kcGil-5VWEOmoP2KJk51EYL9XLxbXHAqrC_sgcN-1rmoaJQrNvt48lYC_9YMC4pZ-RqYFtjPv5KcYMwj29MBxJzFBOOtOx4E_EAxetsx5=w825-h1031-s-no-gm?authuser=0'} width="350px"/>
          <a href="#contact"><button className='commercial-btn'>Contact for details</button></a>
        </div>
      </div>
    </section>
  );
}

export default memo(PackagesSection);
