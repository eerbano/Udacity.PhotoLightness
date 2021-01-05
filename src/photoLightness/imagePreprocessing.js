imagePreprocessing = {}
const imageLoader = require('../helpers/imageLoader')
const imageHelper = require('../helpers/imageHelper')

imagePreprocessing.colorAveraging = async (imagePath) =>
{
    // Load local image from our resources
    const image = await imageLoader.getImage(imagePath)

    // Get average pixel color of whole image
    const pixelColorRGB = imageHelper.averagePixelColorRGB(image)

    // Convert to the format used in our model
    const pixelColorHSL = imageHelper.pixelColorRGBToHSLfp(pixelColorRGB)

    return pixelColorHSL
}

module.exports = imagePreprocessing