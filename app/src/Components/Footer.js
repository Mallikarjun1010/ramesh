import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
      <div>
          <hr />
          <p className="green"> {date} &copy; All Rights are Reserved By Nithyasree Men's PG Hostel </p>
      </div>
    );
}
export default Footer
