package com.adminPage.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by DK on 11/5/16.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String index () {
        return "index";
    };
}
