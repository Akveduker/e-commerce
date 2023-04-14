import { buttonWithBorderTest } from "../../../../helper/testFc/buttonWithBorderTest/buttonWithBorderTest";
import ButtonWithBorder from "./ButtonWithBorder";

buttonWithBorderTest(
    'buttonWithBorderTest',
    <ButtonWithBorder
        styleType="medium"
    >
        test
    </ButtonWithBorder>,
    'test'
)