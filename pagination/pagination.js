import React from 'react'

const pagination = ({data}) => {
    let pageNumbers = []
    for (let i = 1; i < Math.ceil(data.length/10)+1; i++) {
        pageNumbers.push(i);
    }
  return (
    <div>
      <center>
          {pageNumbers.map(page => <div className="pagebutton">{page}</div>)}
      </center>
    </div>
  )
}

export default pagination


