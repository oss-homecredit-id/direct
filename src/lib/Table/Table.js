import React from "react";

const Table = ({ tableHead, tableData }) => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            {tableHead.map((tableHead, index) => (
              <th key={index}>{tableHead} </th>
            ))}
          </tr>
          <tr>
            {tableData.map((tableData, index) => (
              <td key={index}>{tableData} </td>
            ))}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .table {
          margin: 40px 0 0;
        }
      `}</style>
    </>
  );
};

export default Table;
