import IconsPayment from "@/app/Components/IconsComponents/PaymentForm/icons_payment";

export default function PaymentSection() {
    return (
        <section className="text-center">
            <h4 className="text-[3rem] mb-4">Download the pack!</h4>
            <p className="text-xl">
                If you would like to support me, you can pay whatever you would like to get the
                icons - even $0!
            </p>
            <IconsPayment />
        </section>
    );
}
