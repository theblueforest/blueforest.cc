import ReactGA from "react-ga"
import { BlueForest } from "./bundle"
import { HomePage } from "./pages/Home"

ReactGA.initialize("UA-132336786-2")

BlueForest.Render({
  HOME: HomePage,
})
