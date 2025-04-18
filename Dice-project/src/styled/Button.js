export const OutlineButton = styled.button`
  color: black;
  background-color: white;
  padding: 10px 20px; /* Increased horizontal padding for better look */
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 600; /* Makes text more readable */
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    background-color: #333; /* Slightly darker shade when clicked */
    border-color: #333;
  }
`;
