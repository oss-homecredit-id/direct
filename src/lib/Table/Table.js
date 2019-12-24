import React from "react";
import styled from "@emotion/styled";

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 15px;
  padding: 10px;
`;

const TableRow = styled.tr`
  margin-top: 20px;
  &:nth-child(even){
    ${props =>
      props.type1 ? "background-color: #f5f5f5" : "background-color: unset"}
`;

// const TableData = styled.td(props => ({
//   borderTop: props.type1 && '1px solid #9b9b9b',
//   borderBottom: props.type1 && '1px solid #9b9b9b',
//   padding: props.type1 && '15px',
//   textAlign: props.type1 && 'center',
//   &:first-of-type {
//     borderLeft: '1px solid #9b9b9b',
//     border-top-left-radius: 8px;
//     border-bottom-left-radius: 8px;
//   }'
//   &:last-of-type {
//     border-right: 1px solid #9b9b9b;
//     border-top-right-radius: 8px;
//     border-bottom-right-radius: 8px;
//   }

// }))

const TableData = styled.td`
  border-top: 1px solid #9b9b9b;
  border-bottom: 1px solid #9b9b9b;
  padding: 15px;
  text-align: center;
  &:first-of-type {
    border-left: 1px solid #9b9b9b;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-of-type {
    border-right: 1px solid #9b9b9b;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Table = ({ tableData, type1 }) => {
  return (
    <TableContainer>
      <thead>
        <TableRow>
          {Object.keys(tableData[0]).map((data, index) => (
            <th key={"thead" + index}>{data}</th>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <TableRow key={"tr" + index} type1={type1}>
            {Object.values(data).map((datas, keyIndex) => (
              <TableData key={"td" + keyIndex} style={{ maxWidth: "150px" }}>
                {datas}
              </TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
