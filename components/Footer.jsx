function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">يعقوب للتجارة</h3>
          <p className="mb-4">
            مبيع و صيانة جميع انواع المعدات
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/svg/facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/svg/twitter.svg" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/svg/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
          <div className="text-center text-sm">
            <p>© {new Date().getFullYear()} يعقوب للتجارة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  