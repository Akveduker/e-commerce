import { buttonWithBorderTest } from "../../../../helper/testFc/buttonWithBorderTest/buttonWithBorderTest";
import LinkWithBorder from "./LinkWithBorder";

buttonWithBorderTest(
    'buttonWithBorderTest',
    <LinkWithBorder
        styleType="medium"
        to={'/'}
    >
        test
    </LinkWithBorder>,
    'test'
)