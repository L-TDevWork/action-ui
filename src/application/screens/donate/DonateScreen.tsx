import { useState, type JSX } from "react";

export const DonateScreen: React.FC<{}> = (): JSX.Element => {
    const [TabIndex, setTabIndex] = useState<number>(1);
    const [TabOptionIndex, setTabOptionIndex] = useState<number>(1);

    return <div className="screen-container for-donations">
        <div className="donate-overlay-bg">
            <div className="screen-content">
                <div className="donations-form">
                    <h1 className="font-bold">Donate to Actionaid</h1>
                    <div className="w-9 fields-area-tabs flex justify-content-between">
                        <div onClick={() => setTabIndex(1)} className={`monthly ${TabIndex == 1 && 'active'}`}>
                            <h6 className="font-bold">Monthly</h6>
                        </div>
                        <div onClick={() => setTabIndex(2)} className={`once-off ${TabIndex == 2 && 'active'}`}>
                            <h6 className="font-bold">Once Off</h6>
                        </div>
                    </div>
                    <div className="w-9 fields-area-tabs-options flex justify-content-between">
                        <div onClick={() => setTabOptionIndex(1)} className={`p-2 font-bold ${TabOptionIndex == 1 && 'active'}`}>
                            <span>R500.00</span>
                        </div>
                        <div onClick={() => setTabOptionIndex(2)} className={`p-2 font-bold ${TabOptionIndex == 2 && 'active'}`}>
                            <span>R1000.00</span>
                        </div>
                        <div onClick={() => setTabOptionIndex(3)} className={`p-2 font-bold ${TabOptionIndex == 3 && 'active'}`}>
                            <span>R1500.00</span>
                        </div>
                        <div onClick={() => setTabOptionIndex(4)} className={`p-2 font-bold ${TabOptionIndex == 4 && 'active'}`}>
                            <span>Other</span>
                        </div>
                    </div>
                    <div className="w-9 messages-options grid">
                        {TabOptionIndex == 1 && <p><b>R500</b> Ensure 1 girls can attend after school program's on self -development</p>}
                        {TabOptionIndex == 2 && <p><b>R1000</b> provides training to 1 young mothers, living in poverty, to enhance their job seeking skills</p>}
                        {TabOptionIndex == 3 && <p><b>R1500</b> provides 5 households with 5 litres of clean water in mining water polluted areas</p>}
                        {TabOptionIndex == 4 && <p><b>Donate</b> Except This type of Amount. So Type which amount per month</p>}

                        {(TabOptionIndex == 4 && TabIndex == 2) && <fieldset className="form-group">
                            <input
                                className="form-control"
                                placeholder="Enter amount"
                                name="Amount" />
                        </fieldset>}

                        <div className="payment-types flex w-6 justify-content-between m-2">
                            {TabIndex == 2 ? <>
                                <div className="text-center">
                                    <span className="font-bold">Credit Card</span>
                                </div>
                                <div className="text-center">
                                    <span className="font-bold">Snapscan</span>
                                </div>
                            </> : <div className="text-center">
                                <span className="font-bold">Direct Debit</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}