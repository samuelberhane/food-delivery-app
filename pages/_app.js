import "../styles/globals.css";
import { Layout } from "../components";
import { Provider } from "react-redux";
import store from "../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </Provider>
  );
}
