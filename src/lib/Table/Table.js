import React from "react";

const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(tableData[0]).map((data, index) => (
            <th key={"thead" + index}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={"tr" + index}>
            {Object.values(data).map((datas, keyIndex) => (
              <td key={"td" + keyIndex}>{datas}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
