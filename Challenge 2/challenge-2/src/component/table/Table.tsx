import React from "react";

export type ColumnType<T> = {
  label: string;
  key: keyof T;
};

interface TableProps<T> {
  columnsDef: ColumnType<T>[];
  data: T[];
}

const Table = <T,>({ columnsDef, data }: TableProps<T>) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columnsDef.map((column) => (
              <th key={String(column.key)}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnsDef.map((column) => (
                <td key={String(column.key)}>{String(row[column.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
