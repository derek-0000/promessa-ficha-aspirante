import { useRef, createElement } from "react";
import { useReactToPrint } from "react-to-print";

import { Box } from "@mui/system";

type Props = {
  children: React.ReactNode;
  wrapper: React.ReactElement<any, any>;
  childrenHidden?: boolean;
};

export default function PrintComponent({
  wrapper,
  children,
  childrenHidden,
}: Props) {
  const printComponent = useRef(null);

  const reactToPrint = useReactToPrint({
    content: () => printComponent.current,
    removeAfterPrint: true,
  });

  const handlePrint = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    return reactToPrint();
  };

  return (
    <>
      <Box display={childrenHidden ? "none" : ""}>
        <Box ref={printComponent}>{children}</Box>
      </Box>
      {createElement(wrapper.type, { ...wrapper.props, onClick: handlePrint })}
    </>
  );
}
