import React from "react";
import styled from "@emotion/styled";

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 15px;
  padding: 10px;
`;

const TableRow = styled.tr`
  margin-top: 20px;
  &:nth-of-type(even){
    ${props =>
      props.type1 ? "background-color: #f5f5f5" : "background-color: unset"}
`;

const TableData = styled.td(props => ({
  borderTop: props.type1 && "1px solid #9b9b9b",
  borderBottom: props.type1 && "1px solid #9b9b9b",
  padding: props.type1 ? "15px" : "10px",
  textAlign: props.type1 && "center",
  "&:first-of-type": props.type1
    ? {
        borderLeft: "1px solid #9b9b9b",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
      }
    : null,
  "&:last-of-type": props.type1
    ? {
        borderRight: "1px solid #9b9b9b",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
      }
    : null,
}));

const Table = ({ tableData, type1, ...props }) => {
  return (
    <TableContainer style={props.styleConfig}>
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
              <TableData
                key={"td" + keyIndex}
                style={{ maxWidth: "150px" }}
                type1={type1}
              >
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
