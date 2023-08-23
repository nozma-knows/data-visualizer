import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface DIsplayDataProps {
  data: string[][];
}

function TableHeader({ data }: { data: string[] }) {
  return (
    <Thead>
      <Tr>
        {data.map((row) => {
          return (
            <Th key={row} className="px-4">
              {row}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
}

function TableData({ data }: { data: string[][] }) {
  const filteredData = data.filter((item) => item[0] !== "");
  return (
    <Tbody>
      {filteredData.map((row, ind) => (
        <Tr key={ind}>
          {row.map((item, index) => (
            <Td key={index} className="px-4 truncaate">
              {item}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
}

export default function DisplayData({ data }: DIsplayDataProps) {
  // Variables
  const tableHeading = data[0];
  const tableData = data.slice(1);

  // UI
  return (
    <Box w="80%" h="50%" className="overflow-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <TableContainer>
          <Table size="md" variant="striped">
            <TableHeader data={tableHeading} />
            <TableData data={tableData} />
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
}
