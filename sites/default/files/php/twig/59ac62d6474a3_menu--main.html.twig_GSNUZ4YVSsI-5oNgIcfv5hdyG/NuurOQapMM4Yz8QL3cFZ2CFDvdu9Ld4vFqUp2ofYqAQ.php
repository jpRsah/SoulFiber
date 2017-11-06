<?php

/* themes/integrity/templates/menu--main.html.twig */
class __TwigTemplate_bc8881d7d030ce968bb694f008ae5a2ea6880d53d330976c0d8948db1ca69215 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("import" => 20, "macro" => 27, "if" => 29, "for" => 35);
        $filters = array();
        $functions = array("link" => 49);

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('import', 'macro', 'if', 'for'),
                array(),
                array('link')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 10
        echo "
";
        // line 12
        echo "<div class=\"navbar\">
  <div class=\"navbar-header pull-right\">
    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
    </button>
    <div class=\"collapse navbar-collapse\">
      ";
        // line 20
        $context["menus"] = $this;
        // line 21
        echo "      ";
        // line 25
        echo "      ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($context["menus"]->getmenu_links((isset($context["items"]) ? $context["items"] : null), (isset($context["attributes"]) ? $context["attributes"] : null), 0)));
        echo "

      ";
        // line 55
        echo "
    </div>
  </div>
</div>
";
    }

    // line 27
    public function getmenu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 28
            echo "        ";
            $context["menus"] = $this;
            // line 29
            echo "        ";
            if ((isset($context["items"]) ? $context["items"] : null)) {
                // line 30
                echo "          ";
                if (((isset($context["menu_level"]) ? $context["menu_level"] : null) == 0)) {
                    // line 31
                    echo "            <ul class=\"nav navbar-nav\" role=\"menu\" aria-labelledby=\"dropdownMenu\">
          ";
                } else {
                    // line 33
                    echo "            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">
          ";
                }
                // line 35
                echo "          ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 36
                    echo "            ";
                    if ($this->getAttribute($context["item"], "below", array())) {
                        // line 37
                        echo "              ";
                        if (((isset($context["menu_level"]) ? $context["menu_level"] : null) == 0)) {
                            // line 38
                            echo "                <li class=\"dropdown\">
                  <a href=\"";
                            // line 39
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                            echo "\" class=\"dropdown-toggle\">";
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "title", array()), "html", null, true));
                            echo " <span class=\"caret\"></span></a>
                  ";
                            // line 40
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", array()), (isset($context["attributes"]) ? $context["attributes"] : null), ((isset($context["menu_level"]) ? $context["menu_level"] : null) + 1))));
                            echo "
                </li>
              ";
                        } else {
                            // line 43
                            echo "                <li class=\"dropdown-submenu\">
                  <a href=\"";
                            // line 44
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                            echo "\">";
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "title", array()), "html", null, true));
                            echo "</a>
                  ";
                            // line 45
                            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", array()), (isset($context["attributes"]) ? $context["attributes"] : null), ((isset($context["menu_level"]) ? $context["menu_level"] : null) + 1))));
                            echo "
                </li>
              ";
                        }
                        // line 48
                        echo "            ";
                    } else {
                        // line 49
                        echo "              <li ";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "attributes", array()), "html", null, true));
                        echo ">";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('drupal_core')->getLink($this->getAttribute($context["item"], "title", array()), $this->getAttribute($context["item"], "url", array())), "html", null, true));
                        echo "</li>
            ";
                    }
                    // line 51
                    echo "          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 52
                echo "          </ul>
        ";
            }
            // line 54
            echo "      ";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "themes/integrity/templates/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 54,  163 => 52,  157 => 51,  149 => 49,  146 => 48,  140 => 45,  134 => 44,  131 => 43,  125 => 40,  119 => 39,  116 => 38,  113 => 37,  110 => 36,  105 => 35,  101 => 33,  97 => 31,  94 => 30,  91 => 29,  88 => 28,  74 => 27,  66 => 55,  60 => 25,  58 => 21,  56 => 20,  46 => 12,  43 => 10,);
    }

    public function getSource()
    {
        return "{#  https://api.drupal.org/api/drupal/core!modules!system!templates!menu.html.twig/8
    menu_name: The machine name of the menu.
    items: A nested list of menu items. Each menu item contains:
      attributes: HTML attributes for the menu item.
      below: The menu item child items.
      title: The menu link title.
      url: The menu link url, instance of \\Drupal\\Core\\Url
      localized_options: Menu link localized options.
#}

{# All menu and submenu items #}
<div class=\"navbar\">
  <div class=\"navbar-header pull-right\">
    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
    </button>
    <div class=\"collapse navbar-collapse\">
      {% import _self as menus %}
      {#
        We call a macro which calls itself to render the full tree.
        @see http://twig.sensiolabs.org/doc/tags/macro.html
      #}
      {{ menus.menu_links(items, attributes, 0) }}

      {% macro menu_links(items, attributes, menu_level) %}
        {% import _self as menus %}
        {% if items %}
          {% if menu_level == 0 %}
            <ul class=\"nav navbar-nav\" role=\"menu\" aria-labelledby=\"dropdownMenu\">
          {% else %}
            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">
          {% endif %}
          {% for item in items %}
            {% if item.below %}
              {% if menu_level == 0 %}
                <li class=\"dropdown\">
                  <a href=\"{{ item.url }}\" class=\"dropdown-toggle\">{{ item.title }} <span class=\"caret\"></span></a>
                  {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
                </li>
              {% else %}
                <li class=\"dropdown-submenu\">
                  <a href=\"{{ item.url }}\">{{ item.title }}</a>
                  {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
                </li>
              {% endif %}
            {% else %}
              <li {{ item.attributes }}>{{ link(item.title, item.url) }}</li>
            {% endif %}
          {% endfor %}
          </ul>
        {% endif %}
      {% endmacro %}

    </div>
  </div>
</div>
";
    }
}
