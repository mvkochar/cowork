import { Link } from 'react-router-dom'
import { BlogItem, Cta, FaqBlock } from '../components'
import BlogItemsList from '../db/BlogItemsList'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f'>
        <div className="home-main-info">
          <h1 className="h1-title">Elevate Your Workspace with Cowork</h1>
          <div className="home-main-bottom d-f align-center">
            <a href="" className="home-main-claim">Claim Your Spot</a>
            <h4 className="subheading">Where innovation meets collaboration 🚀</h4>
          </div>
        </div>
        <div><img src="/images/home-main.png" alt="home-main" /></div>
      </main>
      <section className='home-partners'>
        <h2 className="home-partners-title">Trusted by Leading Companies</h2>
        <div className="home-partners-logos"><img src="/images/partners.png" alt="partners" /></div>
      </section>
      <section className='home-features'>
        <h2 className="h2-title">Why Choose <span>Cowork?</span></h2>
        <div className="home-features-box d-f">
          <div className="home-features-card">
            <div>
              <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.1871 15.7031C41.2842 16.4648 41.3331 17.232 41.3333 17.9999C41.3361 21.3633 40.3958 24.66 38.6193 27.5158C36.8427 30.3716 34.3011 32.6721 31.2829 34.1561C28.2647 35.6401 24.8909 36.2482 21.5445 35.9113C18.1981 35.5743 15.0132 34.3059 12.3514 32.2499C17.0746 31.0949 22.6302 28.7006 27.8089 25.7249C33.3289 22.5543 37.9883 19.0237 41.1871 15.7031ZM45.2914 5.37745C43.8571 2.90432 40.0714 2.34745 34.3227 3.7537C31.6612 1.69577 28.4759 0.425526 25.1287 0.0872558C21.7815 -0.251014 18.4065 0.356252 15.3871 1.84007C12.3677 3.32389 9.82495 5.62478 8.04776 8.48135C6.27056 11.3379 5.33013 14.6357 5.3333 17.9999C5.33354 18.7716 5.38239 19.5425 5.47955 20.3081C0.28768 25.6874 0.36268 28.8749 1.37705 30.6224C2.3333 32.2799 4.3283 32.9999 6.9533 32.9999C8.77584 32.9622 10.5876 32.7105 12.3514 32.2499C11.3843 31.5023 10.4948 30.6593 9.69643 29.7337C6.45456 30.2737 4.44643 29.9212 3.97205 29.1168C3.6983 28.6462 3.85018 27.7593 4.3883 26.6793C4.92039 25.6678 5.56715 24.721 6.31581 23.8574C6.31668 23.8519 6.31668 23.8462 6.31581 23.8406V23.8556C7.05993 26.0086 8.20511 28.0012 9.69081 29.7281C13.6171 29.0737 19.3452 27.1199 26.3089 23.1187C31.5833 20.0981 37.2083 15.8756 40.3564 12.1537C39.6151 9.99768 38.4697 8.00272 36.9814 6.27557L36.9571 6.24745C36.9571 6.25682 36.9739 6.26432 36.9814 6.27557C39.6458 5.83495 42.1133 5.8687 42.7002 6.88307C42.8727 7.17744 42.8877 7.61807 42.7283 8.19557C42.4114 9.37869 41.5677 10.7324 40.3602 12.1574C40.7572 13.3092 41.0355 14.4985 41.1908 15.7068C43.5346 13.2693 45.0946 10.9537 45.6252 8.97182C45.9889 7.59557 45.8783 6.38807 45.2914 5.37745Z" fill="#3139FB" />
              </svg>
            </div>
            <h3 className="h3-title">Flexible Spaces</h3>
            <p className="features-card-desc">
              Whether you're a solopreneur, startup, or an established enterprise,
              our flexible office solutions cater to your evolving needs.
            </p>
          </div>
          <div className="home-features-card">
            <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 9H5.99998C5.20434 9 4.44127 9.31607 3.87866 9.87868C3.31606 10.4413 2.99998 11.2044 2.99998 12V36C2.99998 36.7956 3.31606 37.5587 3.87866 38.1213C4.44127 38.6839 5.20434 39 5.99998 39H42C42.7956 39 43.5587 38.6839 44.1213 38.1213C44.6839 37.5587 45 36.7956 45 36V12C45 11.2044 44.6839 10.4413 44.1213 9.87868C43.5587 9.31607 42.7956 9 42 9ZM25.5 33H22.5C22.1022 33 21.7206 32.842 21.4393 32.5607C21.158 32.2794 21 31.8978 21 31.5C21 31.1022 21.158 30.7206 21.4393 30.4393C21.7206 30.158 22.1022 30 22.5 30H25.5C25.8978 30 26.2793 30.158 26.5606 30.4393C26.842 30.7206 27 31.1022 27 31.5C27 31.8978 26.842 32.2794 26.5606 32.5607C26.2793 32.842 25.8978 33 25.5 33ZM37.5 33H31.5C31.1022 33 30.7206 32.842 30.4393 32.5607C30.158 32.2794 30 31.8978 30 31.5C30 31.1022 30.158 30.7206 30.4393 30.4393C30.7206 30.158 31.1022 30 31.5 30H37.5C37.8978 30 38.2793 30.158 38.5606 30.4393C38.8419 30.7206 39 31.1022 39 31.5C39 31.8978 38.8419 32.2794 38.5606 32.5607C38.2793 32.842 37.8978 33 37.5 33ZM5.99998 16.5V12H42V16.5H5.99998Z" fill="#3139FB" />
              </svg>
            </div>
            <h3 className="h3-title">Transparent Pricing</h3>
            <p className="features-card-desc">
              Choose a plan that suits your budget and business objectives, and experience
              the value of a premium coworking space without breaking the bank.
            </p>
          </div>
          <div className="home-features-card">
            <div>
              <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4002_417)">
                  <path d="M27.6667 15C27.6667 14.6022 27.8247 14.2207 28.106 13.9394C28.3873 13.6581 28.7689 13.5 29.1667 13.5H47.1667C47.5645 13.5 47.946 13.6581 48.2273 13.9394C48.5086 14.2207 48.6667 14.6022 48.6667 15C48.6667 15.3979 48.5086 15.7794 48.2273 16.0607C47.946 16.342 47.5645 16.5 47.1667 16.5H29.1667C28.7689 16.5 28.3873 16.342 28.106 16.0607C27.8247 15.7794 27.6667 15.3979 27.6667 15ZM47.1667 22.5H29.1667C28.7689 22.5 28.3873 22.6581 28.106 22.9394C27.8247 23.2207 27.6667 23.6022 27.6667 24C27.6667 24.3979 27.8247 24.7794 28.106 25.0607C28.3873 25.342 28.7689 25.5 29.1667 25.5H47.1667C47.5645 25.5 47.946 25.342 48.2273 25.0607C48.5086 24.7794 48.6667 24.3979 48.6667 24C48.6667 23.6022 48.5086 23.2207 48.2273 22.9394C47.946 22.6581 47.5645 22.5 47.1667 22.5ZM47.1667 31.5H33.6667C33.2689 31.5 32.8873 31.6581 32.606 31.9394C32.3247 32.2207 32.1667 32.6022 32.1667 33C32.1667 33.3979 32.3247 33.7794 32.606 34.0607C32.8873 34.342 33.2689 34.5 33.6667 34.5H47.1667C47.5645 34.5 47.946 34.342 48.2273 34.0607C48.5086 33.7794 48.6667 33.3979 48.6667 33C48.6667 32.6022 48.5086 32.2207 48.2273 31.9394C47.946 31.6581 47.5645 31.5 47.1667 31.5ZM21.1586 26.625C22.6472 25.4784 23.7397 23.8946 24.2827 22.0956C24.8257 20.2967 24.792 18.373 24.1864 16.5941C23.5808 14.8153 22.4336 13.2707 20.9056 12.1769C19.3777 11.083 17.5458 10.4949 15.6667 10.4949C13.7876 10.4949 11.9556 11.083 10.4277 12.1769C8.89981 13.2707 7.75259 14.8153 7.14695 16.5941C6.54132 18.373 6.50764 20.2967 7.05065 22.0956C7.59366 23.8946 8.68611 25.4784 10.1748 26.625C6.30855 28.2619 3.26168 31.5563 2.21356 35.625C2.15631 35.8468 2.15058 36.0786 2.19682 36.3029C2.24306 36.5272 2.34003 36.7379 2.4803 36.9189C2.62057 37.0999 2.80043 37.2464 3.00607 37.3471C3.21171 37.4478 3.43769 37.5002 3.66668 37.5H27.6667C27.8957 37.5002 28.1216 37.4478 28.3273 37.3471C28.5329 37.2464 28.7128 37.0999 28.8531 36.9189C28.9933 36.7379 29.0903 36.5272 29.1365 36.3029C29.1828 36.0786 29.1771 35.8468 29.1198 35.625C28.0717 31.5544 25.0248 28.26 21.1586 26.625Z" fill="#3139FB" />
                </g>
                <defs>
                  <clipPath id="clip0_4002_417">
                    <rect width="48" height="48" fill="white" transform="translate(0.666687)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="h3-title">Tailored Memberships</h3>
            <p className="features-card-desc">
              Whether you prefer the flexibility of a hot desk or the exclusivity of a private office,
              Cowork offers tailored solutions to suit every working style.
            </p>
          </div>
        </div>
      </section>
      <section className='home-virtual'>
        <div className="home-virtual-heading d-f jc-sb">
          <h2 className="h1-title">Virtual Tour</h2>
          <div className="home-virtual-action d-f align-center">
            <p className="home-virtual-desc">
              Our immersive 📺 video tour gives you a sneak peek
              into the vibrant atmosphere that define the Cowork experience.
            </p>
            <a href="" className="home-virtual-link">Explore Spaces</a>
          </div>
        </div>
        <div className="home-virtual-video">
          <iframe width="1408" height="700" src="https://www.youtube.com/embed/6TDRLkctTvo?si=5WgdpU4JvqZ9W62r" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>
      <section className='home-statistic d-f'>
        <div className="home-statistic-content">
          <h4 className="home-statistic-above">Cowork in Numbers</h4>
          <h2 className="h2-title">Transformative Statistics That Speak Volumes</h2>
          <div className="home-statistic-box d-f">
            <dl>
              <dt className='h2-title'>240%</dt>
              <dd>Community Growth</dd>
            </dl>
            <dl>
              <dt className='h2-title'>99%</dt>
              <dd>Technology Uptime</dd>
            </dl>
            <dl>
              <dt className='h2-title'>50+</dt>
              <dd>Happy Members</dd>
            </dl>
            <dl>
              <dt className='h2-title'>100%</dt>
              <dd>Renewable Energy Sources</dd>
            </dl>
          </div>
        </div>
        <div><img src="/images/home-statistic.png" alt="home-statistic" /></div>
      </section>
      <section className='home-testimonial'>
        <div className="home-testimonial-heading d-f jc-sb">
          <h2 className="h1-title">Hear It from Our Clients</h2>
          <h4 className="subheading">Cowork in Words</h4>
        </div>
        <div className="home-testimonial-box d-f">
          <div className="home-testimonial-item">
            <div><img src="/images/avatars/person-1.png" alt="person-1" /></div>
            <p className="testimonial-item-desc">
              "The 24/7 access and secure facilities have been incredibly convenient
              for my team's flexible schedules. We love the coworking space!"
            </p>
            <div className="testimonial-item-author">
              <h3 className="author-name">Liam Brown</h3>
              <p className="authot-pos">Software Engineer, TechStartup Innovations</p>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div><img src="/images/avatars/person-2.png" alt="person-2" /></div>
            <p className="testimonial-item-desc">
              “The aesthetics of Cowork are inspiring. The attention
              to detail in the design creates an atmosphere that sparks
              creativity. It's a place where ideas flow effortlessly,
              and collaboration happens organically.”
            </p>
            <div className="testimonial-item-author">
              <h3 className="author-name">Michael Rodriguez</h3>
              <p className="authot-pos">Creative Director, DesignCraft Studio</p>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div><img src="/images/avatars/person-3.png" alt="person-3" /></div>
            <p className="testimonial-item-desc">
              "As a freelance designer, I was getting tired of working from home or coffee shops.
              The coworking space has provided me with a productive and professional environment
              to focus on my work."
            </p>
            <div className="testimonial-item-author">
              <h3 className="author-name">Michael Thompson</h3>
              <p className="authot-pos">Graphic Designer, DesignCo</p>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div><img src="/images/avatars/person-4.png" alt="person-4" /></div>
            <p className="testimonial-item-desc">
              "The coworking space has been a wonderful resource for my team.
              The open floor plan and dedicated private offices allow us to
              collaborate and concentrate as needed."
            </p>
            <div className="testimonial-item-author">
              <h3 className="author-name">David Wilson</h3>
              <p className="authot-pos">Project Manager, SoftwareSolutions LLC</p>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div><img src="/images/avatars/person-5.png" alt="person-5" /></div>
            <p className="testimonial-item-desc">
              "The flexible membership options and amenities like high-speed internet, printers,
              and meeting rooms have made this coworking space a perfect fit for my small business."
            </p>
            <div className="testimonial-item-author">
              <h3 className="author-name">Alex Nguyen</h3>
              <p className="authot-pos">Marketing Consultant, Maverick Marketing</p>
            </div>
          </div>
        </div>
      </section>
      <FaqBlock />
      <Cta />
      <section className='home-blog'>
        <h4 className="home-blog-above">Cowork Chronicles</h4>
        <h2 className="h2-title">Insights, Innovation, and <span>Inspiration</span></h2>
        <p className="home-blog-desc">
          Stay updated on the latest trends in coworking,
          productivity tips, and success stories that define
          the Cowork experience.
        </p>
        <div className="home-blog-box d-f">
          {
            BlogItemsList.filter((elem) => elem.id < 4).map((post) => {
              return (
                <BlogItem
                  key={`latest-posts{${post.id}}`}
                  {...post}
                />
              )
            })
          }
        </div>
        <Link to="/blog" className="home-blog-link">View All</Link>
      </section>
    </>
  )
}

export default Home