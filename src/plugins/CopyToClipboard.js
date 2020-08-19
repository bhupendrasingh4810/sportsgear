import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { UncontrolledTooltip } from "reactstrap";
export default props => {

    const [copiedText, setCopiedText] = useState();

    function copyText() {
        setCopiedText(props.text);
        setTimeout(() => setCopiedText(null), 5000);
    }

    return (
        <>
            <CopyToClipboard
                text={props.text}
                onCopy={() => copyText()}>

                <Button
                    className="btn-icon-clipboard"
                    id="tooltip982655500"
                    type="button">
                    <div>
                        <i className="ni ni-active-40" />
                        <span>{props.text}</span>
                    </div>
                </Button>
            </CopyToClipboard>
            <UncontrolledTooltip
                delay={0}
                trigger="hover focus"
                target="tooltip982655500">
                {copiedText
                    ? "Copied"
                    : "Copy To Clipboard"}
            </UncontrolledTooltip>
        </>
    );
};
