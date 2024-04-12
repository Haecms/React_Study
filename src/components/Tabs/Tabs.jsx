export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // ButtonsContainer = buttonVontainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
