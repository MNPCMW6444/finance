import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import domain from "./domain";

export default function Tablea({ realmode }: any) {
  const [a, b] = useState([]);

  useEffect(() => {
    const da = async () => {
      const c = await axios.get(domain + (realmode ? "finnumR" : "finnum"));
      b(c.data.r);
    };

    da();
  }, []);

  return (
    <Table>
      <TableHead>
        {a[0] && Object.keys(a[0]).map((key) => <TableCell>{key}</TableCell>)}
      </TableHead>
      <TableBody>
        {a.length > 0 &&
          a.map((row) => (
            <TableRow>
              {Object.values(row).map((value) => (
                <TableCell>{value + ""}</TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
