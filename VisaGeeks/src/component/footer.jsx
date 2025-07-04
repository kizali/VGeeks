
import React from "react";
const FooterComponent = () => {
  return (
    <div>
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-bold py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} <i className="text-bold text-blue-500">VisaGeeks</i>. All rights reserved.
            </p>
            <p className="text-sm mt-2">
                Contact us at{' '}
            </p>
            <p className="text-xs mt-2">
                Follow us on{' '}
                <a href="#" className="text-blue-400 hover:underline">
                Twitter
                </a>{' '}
                |{' '}
                <a href="#" className="text-blue-400 hover:underline">
                Facebook
                </a>{' '}
                |{' '}
                <a href="#" className="text-blue-400 hover:underline">
                Instagram
                </a>
            </p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent