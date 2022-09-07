// export default function DataHistory() {
//     return (
//      <h1>History</h1>
//     );
//   }


import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  );
}

export default VerticalExample;