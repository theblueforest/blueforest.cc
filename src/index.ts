import { BlueForest } from "./bundle"
import { HomePage } from "./pages/Home"

const router = BlueForest.Router({
  HOME: HomePage,
})

BlueForest.Client(router)
