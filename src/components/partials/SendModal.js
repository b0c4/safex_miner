import React from "react";

export default class SendModal extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.send_cash || this.props.send_token
                    ? 'sendModal active'
                    : 'sendModal'}>
                    <div className="sendModalInner">
                        <span className="close" onClick={this.props.closeSendPopup}>X</span>
                        {
                            this.props.send_cash
                                ?
                                <div>
                                    <p>Send Cash</p>
                                    <form onSubmit={this.props.sendCash}>
                                        <label htmlFor="from">From</label>
                                        <textarea name="from" defaultValue={this.props.fromAddress} rows="2" />

                                        <label htmlFor="send_to">To</label>
                                        <textarea name="send_to" placeholder="Enter Safex Wallet Address" rows="2" />

                                        <label htmlFor="amount">Amount</label>
                                        <input name="amount" placeholder="Enter Amount"></input>
                                        <button type="submit">Send</button>
                                    </form>
                                </div>
                                :
                                <div>
                                    {
                                        this.props.send_token
                                            ?
                                            <div>
                                                <p>Send Tokens</p>
                                                <form onSubmit={this.props.sendToken}>
                                                    <label htmlFor="from">From</label>
                                                    <textarea name="from" defaultValue={this.props.fromAddress} rows="2" />

                                                    <label htmlFor="send_to">To</label>
                                                    <textarea name="send_to" placeholder="Enter Safex Wallet Address" rows="2" />

                                                    <label htmlFor="amount">Amount</label>
                                                    <input name="amount" placeholder="Enter Amount"></input>
                                                    <button type="submit">Send</button>
                                                </form>
                                            </div>
                                            :
                                            <div className="hidden"></div>
                                    }
                                </div>
                        }

                    </div>
                </div>

                <div className={this.props.send_cash || this.props.send_token
                    ? 'sendModalBackdrop active'
                    : 'sendModalBackdrop'} onClick={this.props.closeSendPopup}>
                </div>
            </div>
        );
    }
}