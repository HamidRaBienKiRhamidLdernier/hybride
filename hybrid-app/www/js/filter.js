var ImageFilters = {};
ImageFilters.utils = {
    initSampleCanvas: function () {
        var _canvas = document.createElement('canvas'),
            _context = _canvas.getContext('2d');

        _canvas.width = 0;
        _canvas.height = 0;

        this.createImageData = (_context.createImageData) ? function (w, h) {
                return _context.createImageData(w, h);
            } : function (w, h) {
                return new ImageData(w, h);
            };
    },
    createImageData: function (w, h) {
        this.initSampleCanvas();
        return this.createImageData(w, h);
    }
};

ImageFilters.Redify = function (srcImageData) {
    var srcPixels    = srcImageData.data,
        srcWidth     = srcImageData.width,
        srcHeight    = srcImageData.height,
        srcLength    = srcPixels.length,
        dstImageData = this.utils.createImageData(srcWidth, srcHeight),
        dstPixels    = dstImageData.data;

    for (var i = 0; i < srcLength; i += 4) {
        //var intensity = (srcPixels[i] * 19595 + srcPixels[i + 1] * 38470 + srcPixels[i + 2] * 7471) >> 16;

        var intensity = (srcPixels[i] * 0.3086 + srcPixels[i + 1] * 0.6094 + srcPixels[i + 2] * 0.0820) | 0;
        dstPixels[i] = dstPixels[i + 1] = dstPixels[i + 2] = intensity;
        dstPixels[i + 3] = srcPixels[i + 3];

        dstPixels[i+1] = 0;
        dstPixels[i+2] = 0;
    }

    return dstImageData;
};
