import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";

const PaymentHistory = () => {
    return (
        <div>
            <DashboardTitle title={'payment history'} />
            <h2 className="text-xl font-heading text-center mt-10">There is no history yet...</h2>
        </div>
    );
};

export default PaymentHistory;